<?php

namespace App\Providers;

use App\Enums\Permissions\AccountPermissions;
use App\Models\Account;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        $this->registerAccountManagementPolicies();
        //
    }

    public function registerAccountManagementPolicies() {
        Gate::define(AccountPermissions::GET_ACCOUNT, function(Account $user){
            return $user->hasAccess([AccountPermissions::GET_ACCOUNT]);
        });

        Gate::define(AccountPermissions::CREATE_ACCOUNT, function(Account $user){
            return $user->hasAccess([AccountPermissions::CREATE_ACCOUNT]);
        });
    }

    public function registerMedicationManagementPolicies() {

    }
}
