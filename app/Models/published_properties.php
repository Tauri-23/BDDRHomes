<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published_properties extends Model
{
    use HasFactory;

    public function photos()
    {
        return $this->hasMany(published_properties_photos::class, 'property', 'id');
    }
}
