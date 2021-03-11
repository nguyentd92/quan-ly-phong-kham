<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
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
}
