<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\user_clients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected $generateId;

    public function __construct(IGenerateIdService $generateId) {
        $this->generateId = $generateId;
    }


    public function signupPost(Request $request)
    {
        /** @var user_clients $user **/


        
        $user = user_clients::create([
            'id' => $this->generateId->generate(user_clients::class, 6),
            'firstname' => $request->fname,
            'middlename' => $request->mname,
            'lastname' => $request->lname,
            'gender' => $request->gender,
            'bdate' => $request->bdate,
            'phone' => $request->phone,

            'username' => $request->uname,
            'email' => $request->email,            
            'password' => bcrypt($request->pass),
        ]);

        $token = $user->createToken('main')->plaintTextToken;

        return response(compact('user', 'token'));
    }


    public function login(LoginRequest $request) 
    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)) {
            return response([
                'message' => `Credentials doesn't match`
            ]);
        }

        /** @var user_clients $user **/
        $user = Auth::user();
        $token = $user->createToken('main')->plaintTextToken;

        return response(compact('user', 'token'));
    }

    public function logout(Request $request)
    {
        /** @var user_clients $user **/
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
