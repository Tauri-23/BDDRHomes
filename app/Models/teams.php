<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class teams extends Model
{
    use HasFactory;

    public function agents()
    {
        return $this->hasMany(user_agents::class, "team", "id");
    }
}
