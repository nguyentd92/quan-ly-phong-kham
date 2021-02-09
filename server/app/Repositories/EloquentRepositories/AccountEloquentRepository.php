<?php


namespace App\Repositories\EloquentRepositories;


use App\Models\Account;
use App\Repositories\Contracts\AccountRepository;

class AccountEloquentRepository extends AbstractEloquentBaseRepository implements AccountRepository
{
    public function getModel(): string
    {
        return Account::class;
    }
}
