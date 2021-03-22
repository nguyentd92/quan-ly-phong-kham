<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Contracts\PatientRepository;

class PatientsController extends Controller
{
    protected $patientRepository;

    public function __construct(PatientRepository $patientRepository)
    {
        $this->patientRepository = $patientRepository;
    }

    public function getList() {

    }

    public function getById() {

    }

    public function getPatientExams() {

    }
}
