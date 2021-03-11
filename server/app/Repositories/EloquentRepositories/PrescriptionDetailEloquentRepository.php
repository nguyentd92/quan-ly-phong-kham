<?php


namespace App\Repositories\EloquentRepositories;

use App\Models\PrescriptionDetails;
use App\Repositories\Contracts\PrescriptionDetailRepository;

class PrescriptionDetailEloquentRepository extends AbstractEloquentBaseRepository implements PrescriptionDetailRepository
{
    public function getModel(): string
    {
        return PrescriptionDetails::class;
    }
}
