<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\financing_requirements;
use Illuminate\Http\Request;

class TransactionRequirementsController extends Controller
{
    public function GetTransactionRequirementsByFinancing($financingId)
    {
        return response()->json(
            financing_requirements::where("financing", $financingId)->where('marital_status', 'Single')->get()
        );
    }
}
