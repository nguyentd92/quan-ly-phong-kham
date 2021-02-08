<?php

namespace App\Providers;

use App\Repositories\Contracts\SettingRepository;
use App\Repositories\Contracts\UnitRepository;
use App\Repositories\EloquentRepositories\SettingEloquentRepository;
use App\Repositories\EloquentRepositories\UnitEloquentRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UnitRepository::class, UnitEloquentRepository::class);
        $this->app->bind(SettingRepository::class, SettingEloquentRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
