<?php

use App\Http\Controllers\Api\AgentListingController;
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
/*
* LISTING (ALL)
*/
Route::get('/get-property-types', [AgentCreateListingController::class, 'getPropertyTypes']);
Route::get('/get-property-amenities', [AgentCreateListingController::class, 'getPropertyAmenities']);
Route::get('/get-property-financing', [AgentCreateListingController::class, 'getPropertyFinancing']);
Route::post('/publish-property', [AgentCreateListingController::class, 'publishPropertyPost']);

Route::get('/get-property-agent/{agentId}', [AgentListingController::class, 'getPropertiesAgent']);
Route::get('/get-full-property/{propId}', [AgentListingController::class, 'getFullPropertyViaPropId']);

Route::post('/remove-published-prop-amenity', [AgentListingController::class, 'removeAmenityInProperty']);
Route::post('/add-published-prop-amenity', [AgentListingController::class, 'addAmenityInProperty']);
Route::post('/change-published-prop-type', [AgentListingController::class, 'updatePropertyTypeInProperty']);
Route::post('/remove-published-prop-financing', [AgentListingController::class, 'removeFinancingInProperty']);
Route::post('/add-published-prop-financing', [AgentListingController::class, 'addFinancingInProperty']);

