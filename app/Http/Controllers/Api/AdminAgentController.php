<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\user_agents;
use Illuminate\Http\Request;

class AdminAgentController extends Controller
{
    public function getAllAgents()
    {
        return response()->json(user_agents::all());
    }

    public function getAgentInfo($agentId)
    {
        return response()->json(user_agents::find($agentId));
    }
}
