<?php


namespace App\Repositories\EloquentRepositories;


use App\Models\Setting;
use App\Repositories\Contracts\SettingRepository;

class SettingEloquentRepository extends AbstractEloquentBaseRepository implements SettingRepository
{

    public function getModel()
    {
        return Setting::class;
    }
}
