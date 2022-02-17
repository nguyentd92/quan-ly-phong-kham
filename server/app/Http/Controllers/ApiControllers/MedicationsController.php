<?php

namespace App\Http\Controllers\ApiControllers;

use App\Dtos\MedicationDto;
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
        $data = $this->medicationRepository->getList();

        $listDto = $data->map(function($t) {
            return new MedicationDto($t->medication_id, $t->medication_name, $t->medication_des);
        });
        
        return response()->json($listDto, JsonResponse::HTTP_OK);
    }

    public function getSingle($id): JsonResponse {
        $result = $this->medicationRepository->getSingle($id);

        return response()->json($result);
    }

    public function store(UpsertMedicationRequest $request): JsonResponse {
        $entity = $this->medicationRepository->store([
            "medication_name" => $request->name,
            "medication_des" => $request->description
        ]);

        return response()->json($entity, JsonResponse::HTTP_OK);
    }

    public function update($id, UpsertMedicationRequest $request): JsonResponse {
        $medication = $this->medicationRepository->update($id, [
            'medication_name' => $request->post('name'),
            'medication_des' => $request->post('description')
        ]);

        if($medication == false) {
            return response()->json($medication, JsonResponse::HTTP_OK);
        }

        return response()->json($medication, JsonResponse::HTTP_OK);
    }

    public function delete($id): JsonResponse {
        $isDeleted = $this->medicationRepository->delete($id);

        if($isDeleted) {
            return response()->json(null, JsonResponse::HTTP_NO_CONTENT);
        }

        return response()->json(null,JsonResponse::HTTP_NOT_FOUND);
    }
}
