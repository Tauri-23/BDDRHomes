<?php

use App\Http\Controllers\Api\AdminAgentController;
use App\Http\Controllers\Api\AgentListingController;
use App\Http\Controllers\Api\AgentCreateListingController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ClientListingController;
use App\Http\Controllers\Api\ClientWishlistController;
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
Route::post('/update-published-prop-floorplan', [AgentListingController::class, 'updatePropertyFloorplan']);
Route::post('/update-published-prop-name', [AgentListingController::class, 'updatePropertyName']);
Route::post('/update-published-prop-desc', [AgentListingController::class, 'updatePropertyDesc']);
Route::post('/add-published-prop-photo', [AgentListingController::class, 'addPropertyPhoto']);
Route::post('/remove-published-prop-photo', [AgentListingController::class, 'removePropertyPhoto']);
Route::post('/update-prop-photo-sequence', [AgentListingController::class, 'updatePhotosSequence']);
Route::post('/delete-property-permanently', [AgentListingController::class, 'deleteProperty']);





/*
|----------------------------------------
| Client 
|----------------------------------------
*/
/*
* LISTINGS (ALL)
*/
Route::get('/client-get-all-props', [ClientListingController::class, 'getAllProperties']);

/*
* Wishlists (ALL)
*/
Route::get('/client-get-all-wishlist/{clientId}', [ClientWishlistController::class, 'getAllClientWishlist']);
Route::get('/client-get-wishlist/{wishlistId}', [ClientWishlistController::class, 'getWishlistViaId']);
Route::post('/client-create-wishlist', [ClientWishlistController::class, 'createClientWishlist']);
Route::post('/client-create-wishlist-put-property', [ClientWishlistController::class, 'createClientWishlistAndPutProperty']);
Route::Post('/client-remove-property-from-wishlist', [ClientWishlistController::class, 'removePropertyFromWishlist']);
Route::Post('/client-add-property-to-wishlist', [ClientWishlistController::class, 'addPropertyToWishlist']);
Route::Post('/client-del-wishlist', [ClientWishlistController::class, 'deleteWishlist']);





/*
|----------------------------------------
| Admin 
|----------------------------------------
*/
/*
* Agents (ALL)
*/
Route::get('/get-all-agents', [AdminAgentController::class, 'getAllAgents']);
Route::get('/get-agent-info/{agentId}', [AdminAgentController::class, 'getAgentInfo']);

Route::post('/update-agent-info', [AdminAgentController::class, 'agentUpdateInformation']);
Route::post('/add-agent', [AdminAgentController::class, 'addAgent']);
Route::post('/del-agent', [AdminAgentController::class, 'delAgent']);
