<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class user_clients extends Model
{
    use HasFactory, HasApiTokens;

    public function EmploymentType()
    {
        return $this->belongsTo(employment_types::class, "employment_type", "id");
    }
}
