<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medication extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = 'medication_id';

    protected $fillable = [
        'medication_name',
        'medication_des'
    ];
    
    protected $hidden = ['deleted_at', 'created_at', 'updated_at'];
}
