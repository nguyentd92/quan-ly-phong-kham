<?php

namespace App\Dtos;

use App\Models\Unit;

class MedicineUnitBigDto {
    public $id;
    public $name;
    public $sign;
    
    static function fromUnit(Unit $unit)
    {
        $bigUnit = new MedicineUnitBigDto();
        $bigUnit->id = $unit->unit_id;
        $bigUnit->name = $unit->display_name;
        $bigUnit->sign = $unit->display_sign;

        return $bigUnit;
    }
}