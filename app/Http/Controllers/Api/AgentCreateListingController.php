<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyTypeResource;
use App\Models\property_types;
use Illuminate\Http\Request;

class AgentCreateListingController extends Controller
{
    public function getPropertyTypes() {
        return response()->json(property_types::all());
    }
}
