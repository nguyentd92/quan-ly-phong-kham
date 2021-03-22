<?php

namespace App\Dtos;

use App\Models\Prescription;
use App\Models\Unit;

class MedicineUnitSmallDto {
    public $id;
    public $name;
    public $sign;

    static function fromUnit(Unit $unit)
    {
        $smallUnit = new MedicineUnitSmallDto();
        $smallUnit->id = $unit->unit_id;
        $smallUnit->name = $unit->display_name;
        $smallUnit->sign = $unit->display_sign;

        return $smallUnit;
    }
}
