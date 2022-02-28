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

    public function getListPatient($pageSize) {
        if(is_null($pageSize)) $pageSize = 10;
        return $this->model->paginate($pageSize, ['*'], 'pageIndex');
    }
}
