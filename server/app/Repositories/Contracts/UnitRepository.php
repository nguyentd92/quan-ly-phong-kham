<?php


namespace App\Repositories\Contracts;


interface UnitRepository extends BaseRepositoryInterface
{
    function getByClass($class);
}
