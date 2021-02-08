<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_permissions', function (Blueprint $table) {
            $table->unsignedBigInteger('acc_id');
            $table->string('permission_key');
            $table->timestamps();

            $table->unique(["acc_id", "permission_key"], 'acc_permission_unique');

            $table->foreign('acc_id')->references('account_id')->on('accounts');
            $table->foreign('permission_key')->references('permission_key')->on('permissions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_permissions');
    }
}
