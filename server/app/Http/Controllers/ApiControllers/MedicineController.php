<?php

namespace App\Http\Controllers\ApiControllers;

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

    public function getAll(): JsonResponse {
        return response()->json($this->medicineRepository->getList());
    }

    public function store(UpsertMedicineRequest $request): JsonResponse {
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
}
