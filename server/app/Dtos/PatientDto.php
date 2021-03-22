<?php
namespace App\Dtos;

use App\Models\Patient;

class PatientDto {
    public $id;
    public $full_name;
    public $gender_str;
    public $gender;
    public $dob;
    public $age;
    public $age_str;
    public $phone;
    public $address;
    public $guardian;

    static function fromPatient(Patient $patient) {
        $patientDto = new PatientDto();

        $patientDto->id = $patient->patient_id;
        $patientDto->full_name = $patient->full_name;
        $patientDto->gender = $patient->gender;
        $patientDto->dob = $patient->dob;
        $patientDto->phone = $patient->phone;
        $patientDto->address = $patient->address;
        $patientDto->guardian = $patient->guardian_name;

        $patientDto->gender_str = $patient->gender ? "Nam" : "Nữ";
//        $patientDto->age = self::calcAge($patient->dob);
//        $patientDto->age_str = self::calcAge($patient->dob);
        $patientDto->gender_str = $patient->gender ? "Nam" : "Nữ";

        return $patientDto;
    }

    private static function calcAge($birthDate) {
        //date in mm/dd/yyyy format; or it can be in other formats as well
        $dob = $birthDate;
        //explode the date to get month, day and year
        $dob = explode("/", $dob);
        //get age from date or birthdate
        $age = (date("md", date("U", mktime(0, 0, 0, $dob[0], $dob[1], $dob[2]))) > date("md")
            ? ((date("Y") - $dob[2]) - 1)
            : (date("Y") - $dob[2]));
        return  "Age is:" . $age;
    }
}
