<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Contracts\MedicineRepository;
use Illuminate\Http\JsonResponse;

class MedicineController extends Controller
{
    //
    protected $medicineRepository;

    public function __construct(MedicineRepository $medicineRepository)
    {
        $this->medicineRepository = $medicineRepository;
    }

    public function getAll(): JsonResponse {
        return response()->json($this->medicineRepository->getList());
    }
}
