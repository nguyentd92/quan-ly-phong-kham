<?php

namespace App\Dtos;

use App\Models\Unit;

class MedicineUnitSmallDto {
    public $id;
    public $name;
    public $sign;
    
    public function __construct($id, $name, $sign)
    {
        $this->id = $id;
        $this->name = $name;
        $this->sign = $sign;
    }
}