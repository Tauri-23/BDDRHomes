<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class client_prefered_locations extends Model
{
    use HasFactory;

    public function province()
    {
        return $this->belongsTo(provinces::class, 'province', 'id');
    }
}
