<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\user_admins;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function FetchAdminInfo($adminId)
    {
        $admin = user_admins::find($adminId);

        return response()->json($admin);
    }
}
