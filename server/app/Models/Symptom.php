<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Symptom extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['symptom_name'];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    protected $primaryKey = "symptom_id";
}
