<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\user_clients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    protected $generateId;

    public function __construct(IGenerateIdService $generateId) 
    {
        $this->generateId = $generateId;
    }


    public function signupPost(Request $request)
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
        $user->id = $this->generateId->generate(user_clients::class, 6);
        $user->firstname = $request->fname;
        $user->middlename = $request->mname;
        $user->lastname = $request->lname;
        $user->gender = $request->gender;
        $user->bdate = $request->bdate;
        $user->phone = $request->phone;

        $user->username = $request->uname;
        $user->email = $request->email;
        $user->password = bcrypt($request->pass);

        if($user->save()) 
        {
            $token = $user->createToken('main')->plainTextToken;

            return response()->json([
                'status' => 200,
                'message' => 'Success',
                'user' => $user,
                'token' => $token,
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


    public function login(Request $request) 
    {
        $user = user_clients::where('email', $request->email_uname_phone)
        ->orWhere('username', $request->email_uname_phone)
        ->orWhere('phone', $request->email_uname_phone)
        ->first();

        if(!$user || !Hash::check($request->pass, $user->password))
        {
            // TODO:: Add checker for agents and admin and other usertype
            // This will return error for now
            return response()->json([
                'status' => 401,
                'message' => "Credentials doesn't match"
            ]);
        }

        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'status' => 200,
            'message' => 'Success',
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        if ($user) 
        {
            $user->tokens()->delete();

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

}
