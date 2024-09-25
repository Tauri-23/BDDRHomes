<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class property_developers_projects extends Model
{
    use HasFactory;

    public function developer()
    {
        return $this->belongsTo(property_developers::class, "developer", "id");
    }
}
