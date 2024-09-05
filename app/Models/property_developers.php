<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class property_developers extends Model
{
    use HasFactory;

    public function properties()
    {
        return $this->hasMany(published_properties::class, "developer", "id")->with("photos");
    }
}
