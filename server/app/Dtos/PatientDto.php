<?php

namespace App\Dtos;

use App\Models\Patient;
use App\Models\Prescription;
use DateTime;

class PatientDto {
    public $id;
    public $full_name;
    public $age_int;
    public $phone;
    public $address;
    public $last_exam_at;
    
    static function fromPatient(Patient $patient)
    {
        $patientDto = new PatientDto();
        $patientDto->id = $patient->patient_id;
        $patientDto->full_name = $patient->full_name;
        $patientDto->age_int = $patientDto::getAgeFromDoB($patient->dob);
        $patientDto->phone = $patient->phone;
        $patientDto->address = $patient->address;

        return $patientDto;
    }

    static function getAgeFromDoB($dob) {
        $dateNow = new DateTime();
        $dateOfBirth = new DateTime($dob);
        return (int)($dateNow->diff($dateOfBirth)->days/365);
    }
}