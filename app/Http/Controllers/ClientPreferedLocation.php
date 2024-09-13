<?php

namespace App\Http\Controllers;

use App\Models\client_prefered_locations;
use Illuminate\Http\Request;

class ClientPreferedLocation extends Controller
{
    public function getAllClientPreferedLoc($clientId)
    {
        return response()->json(client_prefered_locations::with('province')->where("client", $clientId)->get());
    }
}
