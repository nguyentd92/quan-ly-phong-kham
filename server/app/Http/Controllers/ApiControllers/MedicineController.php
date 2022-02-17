<?php

namespace App\Http\Controllers\ApiControllers;

use App\Dtos\MedicineDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\Medicines\UpsertMedicineRequest;
use App\Repositories\Contracts\MedicineRepository;
use Illuminate\Http\JsonResponse;

class MedicineController extends Controller
{
    protected $medicineRepository;

    public function __construct(MedicineRepository $medicineRepository)
    {
        $this->medicineRepository = $medicineRepository;
    }

    public function getAll(): JsonResponse
    {
        $data = $this->medicineRepository->getList();

        $list = $data->map(function ($t) {
            return MedicineDto::fromMedicine($t);
        });

        return response()->json($list, JsonResponse::HTTP_OK);
    }

    public function getSingle($id): JsonResponse {
        $result = $this->medicineRepository->getSingle($id);

        return response()->json($result);
    }

    public function store(UpsertMedicineRequest $request): JsonResponse
    {
        $entity = $this->medicineRepository->store([
            'med_name' => $request->name,
            'unit_sell_price' => $request->unit_sell_price,
            'unit_sm_vol' => $request->unit_sm_vol,
            'unit_sm_id' => $request->unit_sm_id,
            'images' => $request->images,
            'medication_id' => $request->medication_id,
        ]);

        return response()->json($entity, JsonResponse::HTTP_CREATED);
    }

    public function update($id, UpsertMedicineRequest $request): JsonResponse {
        $medicine = $this->medicineRepository->update($id, [
            'med_name' => $request->name,
            'unit_sell_price' => $request->unit_sell_price,
            'unit_sm_vol' => $request->unit_sm_vol,
            'unit_sm_id' => $request->unit_sm_id,
            'images' => $request->images,
            'medication_id' => $request->medication_id
        ]);

        if($medicine == false) {
            return response()->json($medicine, JsonResponse::HTTP_OK);
        }

        return response()->json($medicine, JsonResponse::HTTP_OK);
    }

    public function delete($id): JsonResponse {
        $isDeleted = $this->medicineRepository->delete($id);

        if($isDeleted) {
            return response()->json(null, JsonResponse::HTTP_NO_CONTENT);
        }

        return response()->json(null,JsonResponse::HTTP_NOT_FOUND);
    }
}
