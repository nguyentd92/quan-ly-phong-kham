<?php

namespace App\Dtos;

use App\Models\Prescription;

class PrescriptionDto {
    public $id;
    public $symptoms;
    public $diagnosis;
    public $pres_price;
    public $med_price;
    public $bill_price;
    public $patient_id;
    public $re_exam_to;
    public $note;
    public $created_at;

    static function fromPrescription(Prescription $prescription)
    {
        $presDto = new PrescriptionDto();
        $presDto->id = $prescription->pres_id;
        $presDto->symptoms = $prescription->symptoms;
        $presDto->diagnosis = $prescription->diagnosis;
        $presDto->pres_price = $prescription->pres_price;
        $presDto->med_price = $prescription->medication_price;
        $presDto->bill_price = $prescription->bill_price;
        $presDto->patient_id = $prescription->patient_id;
        $presDto->re_exam_to = $prescription->re_exam_to;
        $presDto->note = $prescription->note;
        $presDto->created_at = $prescription->created_at;
        $presDto->created_at_str = self::dateFullStr($prescription->created_at);

        return $presDto;
    }

    private static function dateFullStr($date) {
        //explode the date to get month, day and year
        $date = date_parse_from_format('Y-m-d h:i:s', $date);

        $day = $date['day'];
        $month = $date['month'];
        $year = $date['year'];

        return  "ngày $day tháng $month năm $year";
    }
}
