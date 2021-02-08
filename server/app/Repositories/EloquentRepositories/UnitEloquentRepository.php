<?php


namespace App\Repositories\EloquentRepositories;


use App\Models\Unit;
use App\Repositories\Contracts\UnitRepository;

class UnitEloquentRepository extends AbstractEloquentBaseRepository implements UnitRepository
{

    public function getModel()
    {
        return Unit::class;
    }
}
