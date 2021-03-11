<?php
namespace App\Dtos;

use App\Models\Symptom;

class SymptomDto {
    public $id;
    public $name;

    static function fromSymptom(Symptom $symptom) {
        $dto = new SymptomDto();

        $dto->id = $symptom->symptom_id;
        $dto->name = $symptom->symptom_name;

        return $dto;
    }
}
