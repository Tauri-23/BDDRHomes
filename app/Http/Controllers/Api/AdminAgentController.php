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
    public function agentUpdateInformation(Request $request)
    {
        $agent = user_agents::find($request->agentId);
        $agentOldInfo = '';
        if($agent)
        {
            switch($request->editType)
            {
                case "fname":
                    $agentOldInfo = $agent->firstname;
                    $agent->firstname = $request->newInfo;
                    break;
                case "mname":
                    $agentOldInfo = $agent->middlename;
                    $agent->middlename = $request->newInfo;
                    break;
                case "lname":
                    $agentOldInfo = $agent->lastname;
                    $agent->lastname = $request->newInfo;
                    break;
                case "email":
                    $agentOldInfo = $agent->email;
                    $agent->email = $request->newInfo;
                    break;
                case "phone":
                    $agentOldInfo = $agent->phone;
                    $agent->phone = $request->newInfo;
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
                'message' => "{$agentOldInfo} updated to {$request->newInfo}"
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
