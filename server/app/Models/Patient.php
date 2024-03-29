<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = "patient_id";

    protected $fillable = [
        "full_name",
        "gender",
        "dob",
        "phone",
        "address",
        "guardian_name"
    ];

    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
}
