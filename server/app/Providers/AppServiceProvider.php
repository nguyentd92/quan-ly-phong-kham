<?php

namespace App\Providers;

use App\Repositories\Contracts\AccountRepository;
use App\Repositories\Contracts\MedicationRepository;
use App\Repositories\Contracts\MedicineRepository;
use App\Repositories\Contracts\PatientRepository;
use App\Repositories\Contracts\PrescriptionDetailRepository;
use App\Repositories\Contracts\PrescriptionRepository;
use App\Repositories\Contracts\SettingRepository;
use App\Repositories\Contracts\SymptomRepository;
use App\Repositories\Contracts\UnitRepository;
use App\Repositories\EloquentRepositories\AccountEloquentRepository;
use App\Repositories\EloquentRepositories\MedicationEloquentRepository;
use App\Repositories\EloquentRepositories\MedicineEloquentRepository;
use App\Repositories\EloquentRepositories\PatientEloquentRepository;
use App\Repositories\EloquentRepositories\PrescriptionDetailEloquentRepository;
use App\Repositories\EloquentRepositories\PrescriptionEloquentRepository;
use App\Repositories\EloquentRepositories\SettingEloquentRepository;
use App\Repositories\EloquentRepositories\SymptomEloquentRepository;
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
        $this->app->bind(SymptomRepository::class, SymptomEloquentRepository::class);
        $this->app->bind(AccountRepository::class, AccountEloquentRepository::class);
        $this->app->bind(MedicineRepository::class, MedicineEloquentRepository::class);
        $this->app->bind(MedicationRepository::class, MedicationEloquentRepository::class);
        $this->app->bind(PatientRepository::class, PatientEloquentRepository::class);
        $this->app->bind(PrescriptionRepository::class, PrescriptionEloquentRepository::class);
        $this->app->bind(PrescriptionDetailRepository::class, PrescriptionDetailEloquentRepository::class);
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
