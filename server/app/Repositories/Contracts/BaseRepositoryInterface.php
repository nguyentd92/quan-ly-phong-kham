<?php


namespace App\Repositories\Contracts;


interface BaseRepositoryInterface
{
    function getList();
    function getSingle($id);
    function store(array $attributes);
    function insertBulk(array $listAttributes);
    function update($id, array $attributes);
    function delete($id);
}
