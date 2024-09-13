<?php

namespace App\Http\Controllers;

use App\Models\provinces;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    public function getAllProvince()
    {
        return response()->json(provinces::all());
    }
}
