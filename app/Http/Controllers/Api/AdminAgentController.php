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


    // Agent Profile
    public function agentUpdateName(Request $request)
    {
        $agent = user_agents::find($request->agentId);
        $agentOldXname = '';
        if($agent)
        {
            switch($request->editType)
            {
                case "fname":
                    $agentOldXname = $agent->firstname;
                    $agent->firstname = $request->Xname;
                    break;
                case "mname":
                    $agentOldXname = $agent->middlename;
                    $agent->middlename = $request->Xname;
                    break;
                case "lname":
                    $agentOldXname = $agent->lastname;
                    $agent->lastname = $request->Xname;
                    break;
                default:
                    return response()->json([
                        'status' => 401,
                        'message' => "Invalid Request (EditType)."
                    ]);
            }            
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => "Agent not found."
            ]);
        }
        

        if($agent->save())
        {
            return response()->json([
                'status' => 200,
                'message' => "{$agentOldXname} updated to {$request->Xname}"
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => "Something went wrong when updating agent's firstname please try again later"
            ]);
        }
    }
}
