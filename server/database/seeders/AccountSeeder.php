<?php

namespace Database\Seeders;

use App\Enums\Permissions\AccountPermissions;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('accounts')->insert([
                    'f_name' => 'Administrator',
                    'email' => 'nguyentd92@gmail.com',
                    'password' => Hash::make('122122122'),
                    'phone' => '0935418749',
                    'address' => 'Tầng 4, 28 Nguyễn Tri Phương, phường Phú Hội, TP Huế',
                    'permissions' => json_encode("*")
                ]);

        DB::table('accounts')->insert([
            'f_name' => 'Quản lý',
            'email' => 'nguyen92td@gmail.com',
            'password' => Hash::make('122122122'),
            'phone' => '0935418749',
            'address' => 'Tầng 4, 28 Nguyễn Tri Phương, phường Phú Hội, TP Huế',
            'permissions' => json_encode([
                AccountPermissions::CREATE_ACCOUNT => true,
                AccountPermissions::DELETE_ACCOUNT => true,
                AccountPermissions::SET_ACCOUNT_PERMISSIONS => true,
                AccountPermissions::UPDATE_ACCOUNT => true
            ])
        ]);
    }
}
