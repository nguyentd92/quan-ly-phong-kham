<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Queries\UnitQueries\GetUnits\GetUnitsQuery;
use App\Repositories\Contracts\UnitRepository;
use Illuminate\Http\Request;
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
}
