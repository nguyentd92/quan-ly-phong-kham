<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Dtos\PatientDto;
use App\Http\Requests\Patients\UpsertPatientRequest;
use App\Repositories\Contracts\PatientRepository;
use App\Repositories\Contracts\PrescriptionRepository;
use Illuminate\Http\JsonResponse;

class PatientController extends Controller
{
    /**
     * @var PatientRepository
     */
    protected $patientRepository;
    protected $prescriptionRepository;

    public function __construct(PatientRepository $patientRepository, PrescriptionRepository $prescriptionRepository)
    {
        $this->patientRepository = $patientRepository;
        $this->prescriptionRepository = $prescriptionRepository;
    }

    public function getList(): JsonResponse
    {
        $data = $this->patientRepository->getList();
        $result = $data->map(function($t) {
            // $prescription = $this->prescriptionRepository->getList()->where('patient_id', $t.id);
            return PatientDto::fromPatient($t);
        });
        return response()->json($result);
    }

    public function getSingle($id): JsonResponse {
        $result = $this->patientRepository->getSingle($id);

        return response()->json($result);
    }
    
    public function store(UpsertPatientRequest $request): JsonResponse {
        $patient = $this->patientRepository->store([
            'full_name' => $request->post('full_name'),
            'gender' => $request->post('gender'),
            'dob' => $request->post('dob'),
            'phone' => $request->post('phone'),
            'address' => $request->post('address'),
            'guardian_name' => $request->post('guardian_name')
        ]);

        return response()->json($patient, JsonResponse::HTTP_CREATED);
    }

    public function update($id, UpsertPatientRequest $request): JsonResponse {
        $patient = $this->patientRepository->update($id, [
            'full_name' => $request->post('full_name'),
            'gender' => $request->post('gender'),
            'dob' => $request->post('dob'),
            'phone' => $request->post('phone'),
            'address' => $request->post('address'),
            'guardian_name' => $request->post('guardian_name')
        ]);

        if($patient == false) {
            return response()->json($patient, JsonResponse::HTTP_OK);
        }

        return response()->json($patient, JsonResponse::HTTP_OK);
    }

    public function delete($id): JsonResponse {
        $isDeleted = $this->patientRepository->delete($id);

        if($isDeleted) {
            return response()->json(null, JsonResponse::HTTP_NO_CONTENT);
        }

        return response()->json(null,JsonResponse::HTTP_NOT_FOUND);
    }
}
