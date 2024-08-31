<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\user_clients;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function GetAllClients()
    {
        $clients = user_clients::all();
        return response()->json($clients);
    }

    public function GetClientsInfo($clientId)
    {
        $clients = user_clients::find($clientId);
        return response()->json($clients);
    }
}
