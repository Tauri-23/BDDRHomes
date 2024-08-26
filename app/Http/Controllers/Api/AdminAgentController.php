<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateAgentPasswordService;
use App\Contracts\IGenerateAgentUsernameService;
use App\Contracts\IGenerateIdService;
use App\Contracts\ISendEmailService;
use App\Http\Controllers\Controller;
use App\Mail\AdminAddAgent;
use App\Models\user_agents;
use Illuminate\Http\Request;

class AdminAgentController extends Controller
{
    protected $generateId, $generatePassword, $generateUsername, $sendEmail;

    public function __construct(IGenerateIdService $generateId, 
    IGenerateAgentPasswordService $generatePassword, IGenerateAgentUsernameService $generateUsername,
    ISendEmailService $sendEmail)
    {
        $this->generateId = $generateId;
        $this->generatePassword = $generatePassword;
        $this->generateUsername = $generateUsername;
        $this->sendEmail = $sendEmail;
    }


    public function getAllAgents()
    {
        return response()->json(user_agents::all());
    }

    public function getAgentInfo($agentId)
    {
        return response()->json(user_agents::where('id', $agentId)->with(['team'])->first());
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
                case "team":
                        $agentOldInfo = $agent->team;
                        $agent->team = $request->newInfo;
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

    public function addAgent(Request $request)
    {
        $agentId = $this->generateId->generate(user_agents::class, 6);
        $agentPassword = $this->generatePassword->generate($request->fname, $request->lname);
        $agentUsername = $this->generateUsername->generate($request->fname, $request->lname);

        $agent = new user_agents();
        $agent->id = $agentId;
        $agent->firstname = $request->fname;
        $agent->middlename = $request->mname == "null" ? null : $request->mname;
        $agent->lastname = $request->lname;
        $agent->gender = $request->gender;
        $agent->bdate = $request->bdate;
        $agent->email = $request->email;
        $agent->username = $agentUsername;
        $agent->phone = $request->phone;
        $agent->password = bcrypt($agentPassword);

        if($agent->save())
        {
            $this->sendEmail->send(new AdminAddAgent($agentUsername, $agentPassword), $request->email);

            return response()->json([
                'status' => 200,
                'message' => "Agent added {$request->fname} {$request->lname}"
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong when adding agent please try again later.'
            ]);
        }
    }

    public function delAgent(Request $request)
    {
        $agent = user_agents::find($request->id);

        if($agent)
        {
            $agentName = "$agent->firstname $agent->lastname";
            $agent->delete();
            

            return response()->json([
                'status' => 200,
                'message' => "{$agentName} deleted."
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong please try again later.'
            ]);
        }
    }
}
