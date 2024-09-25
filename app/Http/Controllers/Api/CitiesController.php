<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\cities;
use Illuminate\Http\Request;

class CitiesController extends Controller
{
    public function GetAllCities()
    {
        return response()->json(
            cities::all()
        );
    }
}
