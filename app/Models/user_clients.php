<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class user_clients extends Model
{
    use HasFactory, HasApiTokens;

    public function employment_type()
    {
        return $this->belongsTo(employment_types::class, "employment_type", "id");
    }

    public function prefered_locations()
    {
        return $this->hasMany(client_prefered_locations::class,"client","id");
    }
}
