<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\employment_types;
use Illuminate\Http\Request;

class EmploymentTypesController extends Controller
{
    // GET
    public function GetAllEmploymentType()
    {
        return response()->json(employment_types::all());
    }
}
