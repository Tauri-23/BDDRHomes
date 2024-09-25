<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\provinces;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    public function getAllProvince()
    {
        return response()->json(provinces::all());
    }
}
