<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Medications\UpsertMedicationRequest;
use App\Repositories\Contracts\MedicationRepository;
use Illuminate\Http\JsonResponse;

class MedicationsController extends Controller
{
    //
    protected $medicationRepository;

    public function __construct(MedicationRepository $medicationRepository)
    {
        $this->medicationRepository = $medicationRepository;
    }

    public function getAll(): JsonResponse {
        return response()->json($this->medicationRepository->getList());
    }

    public function store(UpsertMedicationRequest $request): JsonResponse {
        $entity = $this->medicationRepository->store([
            "medication_name" => $request->name,
            "medication_des" => $request->description
        ]);

        return response()->json($entity, JsonResponse::HTTP_OK);
    }
}
