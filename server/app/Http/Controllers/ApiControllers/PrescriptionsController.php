<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Prescriptions\CreatePrescriptionForFamiliar;
use App\Http\Requests\Prescriptions\CreatePrescriptionForGuest;
use App\Http\Requests\Prescriptions\CreatePrescriptionReExam;
use App\Repositories\Contracts\PatientRepository;

class PrescriptionsController extends Controller
{
    protected $patientRepository;

    public function __construct(PatientRepository $patientRepository)
    {
        $this->patientRepository = $patientRepository;
    }

    public function createForFamiliar($id, CreatePrescriptionForFamiliar $request) {

    }

    public function createForGuest(CreatePrescriptionForGuest $request) {

    }

    public function createReExam($id, CreatePrescriptionReExam $request) {

    }
}
