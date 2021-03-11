<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Prescription extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = "pres_id";

    protected $fillable = [
        "symptoms",
        "diagnosis",
        "pres_price",
        "medication_price",
        "bill_price",
        "patient_id",
        "re_exam_to",
        "note"
    ];
}
