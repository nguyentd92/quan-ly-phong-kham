<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Units\UpsertUnitRequest;
use App\Repositories\Contracts\UnitRepository;
use Illuminate\Http\JsonResponse;

class UnitController extends Controller
{
    /**
     * @var UnitRepository
     */
    protected $unitRepository;

    public function __construct(UnitRepository $unitRepository)
    {
        $this->unitRepository = $unitRepository;
    }

    public function getList(): JsonResponse
    {
        $result = $this->unitRepository->getList();

        return response()->json($result);
    }

    public function getSingle($id): JsonResponse {
        $result = $this->unitRepository->getSingle($id);

        return response()->json($result);
    }

    public function store(UpsertUnitRequest $request): JsonResponse {
        $unit = $this->unitRepository->store([
            'display_name' => $request->post('name'),
            'display_sign' => $request->post('sign')
        ]);

        return response()->json($unit, JsonResponse::HTTP_CREATED);
    }

    public function update($id, UpsertUnitRequest $request): JsonResponse {
        $unit = $this->unitRepository->update($id, [
            'display_name' => $request->post('name'),
            'display_sign' => $request->post('sign')
        ]);

        if($unit == false) {
            return response()->json($unit, JsonResponse::HTTP_OK);
        }

        return response()->json($unit, JsonResponse::HTTP_OK);
    }

    public function delete($id): JsonResponse {
        $isDeleted = $this->unitRepository->delete($id);

        if($isDeleted) {
            return response()->json(null, JsonResponse::HTTP_NO_CONTENT);
        }

        return response()->json(null,JsonResponse::HTTP_NOT_FOUND);
    }
}
