<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Prescriptions\CreatePrescriptionForFamiliar;
use App\Http\Requests\Prescriptions\CreatePrescriptionForGuest;
use App\Http\Requests\Prescriptions\CreatePrescriptionReExam;
use App\Repositories\Contracts\PatientRepository;
use App\Repositories\Contracts\PrescriptionDetailRepository;
use App\Repositories\Contracts\PrescriptionRepository;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PrescriptionsController extends Controller
{
    protected $patientRepository;
    protected $prescriptionRepository;
    protected $prescriptionDetailRepository;

    public function __construct(
        PatientRepository $patientRepository,
        PrescriptionRepository $prescriptionRepository,
        PrescriptionDetailRepository $prescriptionDetailRepository
    ) {
        $this->patientRepository = $patientRepository;
        $this->prescriptionRepository = $prescriptionRepository;
        $this->prescriptionDetailRepository = $prescriptionDetailRepository;
    }

    public function createForFamiliar($id, CreatePrescriptionForFamiliar $request)
    {
        if($id != $request->p_id) {
            throw new BadRequestHttpException("Yêu cầu không hợp lệ");
        }

        $patient = $this->patientRepository->getSingle($id);

        if(!$patient) {
            throw new NotFoundHttpException("Thông tin bệnh nhân chưa tồn tại");
        }

        try {
            $medication_price = collect($request->med_list)->reduce(function ($total, $val) {
                return $total + $val["total_price"];
            }, 0);

            DB::beginTransaction();

            $prescription = $this->prescriptionRepository->store([
                "symptoms" => $request->symptoms,
                "diagnosis" => $request->pathology,
                "pres_price" => $request->pres_price,
                "bill_price" => $medication_price + $request->pres_price,
                "medication_price" => $medication_price,
                "patient_id" => $id,
                "note" => $request->note
            ]);

            $medList = [];

            foreach ($request->med_list as $med) {
                $tMed = [
                    "pres_id" => $prescription->pres_id,
                    "med_id" => $med["id"],
                    "formulea" => $med["formulea"],
                    "amount" => $med["amount"],
                    "unit_sell_price" => $med["unit_price"],
                    "sell_price" => $med["total_price"]
                ];

                $medList[] = $tMed;
            }

            $medList = $this->prescriptionDetailRepository->insertBulk(
                $medList
            );
            DB::commit();

            return response()->json(["message" => "Đã tạo phiếu khám cho $patient->full_name"], JsonResponse::HTTP_OK);
        } catch(Exception $e) {
            DB::rollBack();
            return response()->json(["message" => "Xảy ra lỗi khi lưu phiếu khám bệnh"], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function createForGuest(CreatePrescriptionForGuest $request)
    {
        try {
            DB::beginTransaction();
            $patient = $this->patientRepository->store([
                "full_name" => $request->p_full_name,
                "gender" => $request->p_gender,
                "dob" => Carbon::createFromFormat('Y-m-d\TH:i:s+', $request->p_dob),
                "phone" => $request->p_phone,
                "address" => $request->p_address,
                "guardian_name" => $request->p_guardian
            ]);

            $medication_price = collect($request->med_list)->reduce(function ($total, $val) {
                return $total + $val["total_price"];
            }, 0);

            $prescription = $this->prescriptionRepository->store([
                "symptoms" => $request->symptoms,
                "diagnosis" => $request->pathology,
                "pres_price" => $request->pres_price,
                "bill_price" => $medication_price + $request->pres_price,
                "medication_price" => $medication_price,
                "patient_id" => $patient->patient_id,
                "note" => $request->note
            ]);

            $medList = [];

            foreach ($request->med_list as $med) {
                $tMed = [
                    "pres_id" => $prescription->pres_id,
                    "med_id" => $med["id"],
                    "formulea" => $med["formulea"],
                    "amount" => $med["amount"],
                    "unit_sell_price" => $med["unit_price"],
                    "sell_price" => $med["total_price"]
                ];

                $medList[] = $tMed;
            }

            $medList = $this->prescriptionDetailRepository->insertBulk(
                $medList
            );
            DB::commit();

            return response()->json(["message" => "Đã lưu phiếu khám bệnh cho $patient->full_name (Mới)"], JsonResponse::HTTP_CREATED);
        } catch (\PDOException $e) {
            // Woopsy
            DB::rollBack();
            return response()->json(["message" => "Xảy ra lỗi khi lưu phiếu khám bệnh"], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function createReExam($id, CreatePrescriptionReExam $request)
    {
        if($id != $request->re_exam_to) {
            throw new BadRequestHttpException("Mã phiếu khám bệnh không hợp lệ");
        }

        $pres = $this->prescriptionRepository->getSingle($id);

        if(!$pres || $pres->patient_id != $request->p_id) {
            throw new NotFoundHttpException("Phiếu khám bệnh không tồn tại");
        }

        try {
            $medication_price = collect($request->med_list)->reduce(function ($total, $val) {
                return $total + $val["total_price"];
            }, 0);

            DB::transaction();

            $prescription = $this->prescriptionRepository->store([
                "symptoms" => $request->symptoms,
                "diagnosis" => $request->pathology,
                "pres_price" => $request->pres_price,
                "bill_price" => $medication_price + $request->pres_price,
                "medication_price" => $medication_price,
                "patient_id" => $request->p_id,
                "note" => $request->note,
                "re_exam_to" => $id
            ]);

            $medList = [];

            foreach ($request->med_list as $med) {
                $tMed = [
                    "pres_id" => $prescription->pres_id,
                    "med_id" => $med["id"],
                    "formulea" => $med["formulea"],
                    "amount" => $med["amount"],
                    "unit_sell_price" => $med["unit_price"],
                    "sell_price" => $med["total_price"]
                ];

                $medList[] = $tMed;
            }

            $medList = $this->prescriptionDetailRepository->insertBulk(
                $medList
            );
            DB::commit();

            response()->json(["message" => "Thêm phiếu tái khám thành công"], JsonResponse::HTTP_OK);
        } catch(Exception $e) {
            DB::rollBack();
            return response()->json(["message" => "Xảy ra lỗi khi lưu phiếu khám bệnh"], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }

    }
}
