<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Dtos\MedicationDto;
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
        $data = $this->medicationRepository->getList();

        $listDto = $data->map(function($t) {
            return new MedicationDto($t->medication_name, $t->medication_des);
        });
        return response()->json($listDto, JsonResponse::HTTP_OK);
    }

    public function store(UpsertMedicationRequest $request): JsonResponse {
        $entity = $this->medicationRepository->store([
            "medication_name" => $request->name,
            "medication_des" => $request->description
        ]);

        return response()->json($entity, JsonResponse::HTTP_OK);
    }
}
