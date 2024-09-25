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

    public function projects()
    {
        return $this->hasMany(property_developers_projects::class,"developer", "id");
    }
}
