<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ongoing_transactions extends Model
{
    use HasFactory;

    public function client()
    {
        return $this->belongsTo(user_clients::class, "client", "id")->with("EmploymentType");
    }

    public function agent()
    {
        return $this->belongsTo(user_agents::class, "agent", "id");
    }

    public function property()
    {
        return $this->belongsTo(published_properties::class,"property", "id")->with("photos");
    }
}
