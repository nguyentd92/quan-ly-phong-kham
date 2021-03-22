<?php

namespace App\Dtos;

class MedicineInBillDto {
    public $med_name;
    public $formulea;
    public $amount;
    public $amount_str;

    public function __construct($med_name, $formulea, $amount)
    {
        $this->med_name = $med_name;
        $this->formulea = $formulea;
        $this->amount = $amount;
        $this->amount_str = $amount.' viên';
    }
}
