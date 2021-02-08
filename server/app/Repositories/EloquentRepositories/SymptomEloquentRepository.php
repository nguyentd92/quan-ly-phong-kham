<?php


namespace App\Repositories\EloquentRepositories;


use App\Models\Symptom;
use App\Repositories\Contracts\SymptomRepository;

class SymptomEloquentRepository extends AbstractEloquentBaseRepository implements SymptomRepository
{
    public function getModel()
    {
        return Symptom::class;
    }
}
