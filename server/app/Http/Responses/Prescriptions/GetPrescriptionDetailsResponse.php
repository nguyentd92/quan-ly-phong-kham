<?php

namespace App\Http\Responses\Prescriptions;

class GetPrescriptionDetailsResponse {
    // PatientDto
    public $patient;

    // PrescriptionDto
    public $prescription;

    // MedicineInBillDto
    public $medicines;
}
