<?php


namespace App\Repositories\EloquentRepositories;

use App\Models\Patient;
use App\Repositories\Contracts\PatientRepository;

class PatientEloquentRepository extends AbstractEloquentBaseRepository implements PatientRepository
{
    public function getModel(): string
    {
        return Patient::class;
    }
}
