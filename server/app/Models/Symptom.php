<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Symptom extends Model
{
    use HasFactory;

    protected $fillable = ['symptom_name'];

    protected $hidden = ['created_at', 'updated_at'];

    protected $primaryKey = "symptom_id";
}
