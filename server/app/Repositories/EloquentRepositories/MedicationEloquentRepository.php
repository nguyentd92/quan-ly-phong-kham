<?php

namespace App\Repositories\EloquentRepositories;

use App\Models\Medication;
use App\Repositories\Contracts\MedicationRepository;

class MedicationEloquentRepository extends AbstractEloquentBaseRepository implements MedicationRepository
{
    public function getModel()
    {
        return Medication::class;
    }
}
