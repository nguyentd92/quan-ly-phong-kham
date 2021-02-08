<?php

namespace Database\Seeders;

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
                    'address' => 'Tầng 4, 28 Nguyễn Tri Phương, phường Phú Hội, TP Huế'
                ]);
    }
}
