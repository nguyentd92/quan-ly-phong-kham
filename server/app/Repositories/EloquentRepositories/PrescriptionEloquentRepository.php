<?php

namespace App\Repositories\EloquentRepositories;

use App\Models\Prescription;
use App\Repositories\Contracts\PrescriptionRepository;

class PrescriptionEloquentRepository extends AbstractEloquentBaseRepository implements PrescriptionRepository
{

    public function getModel()
    {
        return Prescription::class;
    }
}
