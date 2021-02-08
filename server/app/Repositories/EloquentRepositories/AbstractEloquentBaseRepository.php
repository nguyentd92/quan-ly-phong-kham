<?php


namespace App\Repositories\EloquentRepositories;


use App\Repositories\Contracts\BaseRepositoryInterface;

abstract class AbstractEloquentBaseRepository implements BaseRepositoryInterface
{
    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model;

    /**
     * EloquentRepository constructor.
     */
    public function __construct()
    {
        $this->setModel();
    }

    abstract public function getModel();

    public function setModel() {
        $this->model = app()->make(
            $this->getModel()
        );
    }

    function getList()
    {
        return $this->model->all();
    }

    /**
     * Get one
     * @param $id
     * @return mixed
     */
    function getSingle($id)
    {
        return $this->model->findOrFail($id);
    }

    /**
     * Create
     * @param array $attributes
     * @return mixed
     */
    function store($attributes)
    {
        return $this->model->create($attributes);
    }

    /**
     * Update
     * @param $id
     * @param array $attributes
     * @return bool|mixed
     */
    function update($id, $attributes)
    {
        $result = $this->getSingle($id);
        if ($result) {
            $result->update($attributes);
            return $result;
        }

        return false;
    }

    /**
     * Delete
     *
     * @param $id
     * @return bool
     */
    function delete($id)
    {
        $result = $this->getSingle($id);
        if ($result) {
            $result->delete();

            return true;
        }

        return false;
    }
}
