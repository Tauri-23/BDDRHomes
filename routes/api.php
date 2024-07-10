<?php

use App\Http\Controllers\Api\AgentCreateListingController;
use App\Http\Controllers\Api\AuthController;
use App\Models\user_clients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::middleware('auth:sanctum')
    ->group(function() {
        Route::get('/user', [AuthController::class, 'getUser']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });


/*
|----------------------------------------
| Public 
|----------------------------------------
*/
Route::post('/signup', [AuthController::class, 'SignupPost']);
Route::post('/login', [AuthController::class, 'login']);





/*
|----------------------------------------
| Agent 
|----------------------------------------
*/
Route::get('/get-property-types', [AgentCreateListingController::class, 'getPropertyTypes']);
Route::get('//get-property-amenities', [AgentCreateListingController::class, 'getPropertyAmenities']);
