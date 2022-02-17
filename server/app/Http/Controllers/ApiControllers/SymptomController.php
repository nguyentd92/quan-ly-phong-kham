<?php

namespace App\Http\Controllers\ApiControllers;

use App\Dtos\SymptomDto;
use App\Http\Controllers\Controller;
use App\Http\Requests\Symptoms\UpsertSymptomRequest;
use App\Http\Responses\Common\RequestErrorDetails;
use App\Repositories\Contracts\SymptomRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Psy\Util\Json;

class SymptomController extends Controller
{
    /**
     * @var SymptomRepository
     */
    protected $symptomRepository;

    public function __construct(SymptomRepository $symptomRepository)
    {
        $this->symptomRepository = $symptomRepository;
    }

    public function getAll(): JsonResponse {
        $data = $this->symptomRepository->getList();

        $list = $data->map(function($t) {
            return SymptomDto::fromSymptom($t);
        });

        return response()->json($list, JsonResponse::HTTP_OK);
    }

    public function getSingle($id): JsonResponse {
        $result = $this->symptomRepository->getSingle($id);

        return response()->json($result);
    }

    public function store(UpsertSymptomRequest $request): JsonResponse {
        $entity = $this->symptomRepository->store([
            'symptom_name' => $request->post('name')
        ]);

        return response()->json($entity, JsonResponse::HTTP_CREATED);
    }

    public function update($id, UpsertSymptomRequest $request): JsonResponse {
        $entity = $this->symptomRepository->update($id, [
            'symptom_name' => $request->post('name')
        ]);

        if($entity == false) {
            return response()->json(
                new RequestErrorDetails("Symptom with id = $id was not found"),
                JsonResponse::HTTP_NOT_FOUND);
        }

        return response()->json($entity, JsonResponse::HTTP_CREATED);
    }

    public function delete($id): JsonResponse {
        $isDeleted = $this->symptomRepository->delete($id);

        if($isDeleted) {
            return response()->json(null, JsonResponse::HTTP_NO_CONTENT);
        }

        return response()->json(new RequestErrorDetails("Symptom with id = $id is not found"), JsonResponse::HTTP_NOT_FOUND);
    }
}
