<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\client_prefered_locations;
use App\Models\user_admins;
use App\Models\user_agents;
use App\Models\user_clients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use function PHPUnit\Framework\isNull;

class AuthController extends Controller
{
    protected $generateId;

    public function __construct(IGenerateIdService $generateId) 
    {
        $this->generateId = $generateId;
    }





    /*
    |----------------------------------------
    | Create Account For Client -- this only for usertype client
    |----------------------------------------
    */
    public function signupPost(Request $request)
    {
        try
        {
            $isEmailExist = user_clients::where('email', $request->email)->exists();
            $isPhoneExist = user_clients::where('phone', $request->phone)->exists();
            
            if($isEmailExist) 
            {
                return response()->json([
                    'status' => 422,
                    'message' => 'Email already exists.'
                ]);
            }

            if($isPhoneExist) 
            {
                return response()->json([
                    'status' => 422,
                    'message' => 'Phone Number already exists.'
                ]);
            }
            
            $user = new user_clients();
            $clientId = $this->generateId->generate(user_clients::class, 6);
            $user->id = $clientId;
            $user->firstname = $request->fname;
            $user->middlename = $request->mname ? $request->mname : null;
            $user->lastname = $request->lname;
            $user->gender = $request->gender;
            $user->bdate = $request->bdate;
            $user->phone = $request->phone;

            $user->username = $request->uname;
            $user->email = $request->email;
            $user->password = bcrypt($request->pass);

            $user->save();

            // Input prefered Location
            foreach($request->prefLoc as $prefLocation)
            {
                $pref = new client_prefered_locations();
                $pref->client = $clientId;
                $pref->province = $prefLocation;

                $pref->save();
            }

            $user = user_clients::find($clientId);
            $token = $user->createToken('main')->plainTextToken;

            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'user' => $user,
                'token' => $token,
                'user_type' => 'client'
            ]);
        }
        catch(\Exception $ex)
        {
            return response()->json([
                'status' => 500,
                'message' =>$ex->getMessage()
            ], 500);
        }    

        
    }





    /*
    |----------------------------------------
    | Login -- this will check all the userType Databases and check all your credentials 
    |----------------------------------------
    */
    public function login(Request $request) 
    {
        $user = user_clients::where('email', $request->email_uname_phone)
            ->orWhere('username', $request->email_uname_phone)
            ->orWhere('phone', $request->email_uname_phone)
            ->first();

        $agent = user_agents::where('email', $request->email_uname_phone)
            ->orWhere('username', $request->email_uname_phone)
            ->orWhere('phone', $request->email_uname_phone)
            ->first();

        $admin = user_admins::where('email', $request->email_uname_phone)
            ->orWhere('username', $request->email_uname_phone)
            ->orWhere('phone', $request->email_uname_phone)
            ->first();

        if ($user && Hash::check($request->pass, $user->password)) 
        {
            $token = $user->createToken('main')->plainTextToken;

            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'user' => $user,
                'token' => $token,
                'user_type' => "client"
            ]);
        }
        elseif ($agent && Hash::check($request->pass, $agent->password))
        {
            $token = $agent->createToken('main')->plainTextToken;

            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'user' => $agent,
                'token' => $token,
                'user_type' => "agent"
            ]);
        }
        elseif ($admin && Hash::check($request->pass, $admin->password))
        {
            $token = $admin->createToken('main')->plainTextToken;

            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'user' => $admin,
                'token' => $token,
                'user_type' => "admin"
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => "Credentials don't match"
            ]);
        }

        
    }


    public function logout(Request $request)
    {
        $user = $request->user();

        if ($user) 
        {
            $user->currentAccessToken()->delete();;

            return response()->json([
                'status' => 200,
                'message' => 'Logged out successfully.'
            ]);
        }

        return response()->json([
            'status' => 401,
            'message' => 'User not authenticated.'
        ], 401);
    }





    public function getUser(Request $request) 
    {
        // Get the currently authenticated user
        $user = $request->user();

        // Determine the user type based on the class of the user
        $userType = $user instanceof user_clients 
            ? 'client' 
            : ($user instanceof user_agents ? 'agent' : 'admin');

        // If the user is a client and has an employment type, load the employmentType relationship
        if($userType === 'client' && !is_null($user->employment_type)) {
            $user->load('employment_type'); // Use the relationship name here
        }
        
        // Return the user and user type in a JSON response
        return response()->json([
            'user' => $user,
            'user_type' => $userType,
        ]);
    }

}
