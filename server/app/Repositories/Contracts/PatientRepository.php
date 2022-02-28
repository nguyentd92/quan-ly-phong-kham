<?php


namespace App\Repositories\Contracts;


interface PatientRepository extends BaseRepositoryInterface
{
    function getListPatient($pageSize);
}
