<?php

namespace App\Dtos;

use App\Models\Unit;

class MedicineUnitSmallDto {
    public $id;
    public $name;
    public $sign;
    public $is_small;
    
    static function fromUnit(Unit $unit)
    {
        $smallUnit = new MedicineUnitSmallDto();
        $smallUnit->id = $unit->unit_id;
        $smallUnit->name = $unit->display_name;
        $smallUnit->sign = $unit->display_sign;
        $smallUnit->is_small = $unit->is_small;

        return $smallUnit;
    }

    public static function fromSingleUnit(Unit $unit) {
        $smallUnit = new MedicineUnitSmallDto();
        $smallUnit->id = $unit->unit_id;
        $smallUnit->name = $unit->display_name;
        $smallUnit->sign = $unit->display_sign;
        $smallUnit->is_small = $unit->is_small;

        return $smallUnit;
    }
}