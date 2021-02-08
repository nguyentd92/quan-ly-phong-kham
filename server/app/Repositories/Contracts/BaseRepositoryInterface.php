<?php


namespace App\Repositories\Contracts;


interface BaseRepositoryInterface
{
    function getList();
    function getSingle($id);
    function store(array $attributes);
    function update($id, array $attributes);
    function delete($id);
}
