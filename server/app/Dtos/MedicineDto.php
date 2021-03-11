<?php
namespace App\Dtos;

use App\Models\Medicine;

class MedicineDto {
    public $id;
    public $name;
    public $unit_sell_price;
    public $unit_sm_id;
    public $unit_sm_vol;
    public $medication_id;

    static function fromMedicine(Medicine $medicine) {
        $entity = new Medicine();
        $entity->id = $medicine->med_id;
        $entity->name = $medicine->med_name;
        $entity->unit_sell_price = $medicine->unit_sell_price;
        $entity->unit_sm_id = $medicine->unit_sm_id;
        $entity->unit_sm_vol = $medicine->unit_sm_vol;
        $entity->medication_id = $medicine->medication_id;
        return $entity;
    }
}