<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescriptions', function (Blueprint $table) {
            $table->id('pres_id');

            $table->text('symptoms');
            $table->text('diagnosis');


            $table->double('pres_price');
            $table->double('medication_price');
            $table->double('bill_price');

            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('re_exam_to');

            $table->text('note');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('patient_id')
                ->references('patient_id')
                ->on('patients');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prescriptions');
    }
}
