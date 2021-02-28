<?php

namespace App\Repositories\EloquentRepositories;

use App\Models\Medicine;
use App\Repositories\Contracts\MedicineRepository;

class MedicineEloquentRepository extends AbstractEloquentBaseRepository implements MedicineRepository
{
    public function getModel()
    {
        return Medicine::class;
    }
}
