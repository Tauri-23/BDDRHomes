<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class user_agents extends Model
{
    use HasFactory, HasApiTokens;

    public function team()
    {
        return $this->belongsTo(teams::class, 'team', 'id');
    }
}
