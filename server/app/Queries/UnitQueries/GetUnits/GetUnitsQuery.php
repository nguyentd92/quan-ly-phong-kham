<?php


namespace App\Queries\UnitQueries\GetUnits;


class GetUnitsQuery
{
    protected $unitRepository;

    public function __construct($unitRepository)
    {
        $this->unitRepository = $unitRepository;
    }

    public function execute() {

        return $this->unitRepository->getList();
    }
}
