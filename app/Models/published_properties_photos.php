<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class published_properties_photos extends Model
{
    use HasFactory;

    public function properties()
    {
        return $this->belongsTo(published_properties::class, 'property', 'id');
    }
}
