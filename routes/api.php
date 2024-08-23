<?php

use App\Http\Controllers\Api\AdminAgentController;
use App\Http\Controllers\Api\AgentListingController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ClientListingController;
use App\Http\Controllers\Api\ClientWishlistController;
use App\Http\Controllers\Api\PropertiesController;
use App\Http\Controllers\Api\PropertyListingsController;
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
Route::post('/delete-property-permanently', [AgentListingController::class, 'deleteProperty']);





/*
|----------------------------------------
| Client 
|----------------------------------------
*/
/*
* LISTINGS (ALL)
*/

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





/*
|----------------------------------------
| GENERAL 
|----------------------------------------
*/
/*
* Published Properties
*/
Route::get('/general-get-property-types', [PropertiesController::class, 'getPropertyTypes']);
Route::get('/general-get-property-amenities', [PropertiesController::class, 'getPropertyAmenities']);
Route::get('/general-get-property-financing', [PropertiesController::class, 'getPropertyFinancing']);
Route::get('/get-published-property', [PropertiesController::class, 'getAllPublishedProperties']);
Route::get('/get-published-property-by-id/{propId}', [PropertiesController::class, 'getFullPropertyViaId']);

Route::post('/general-publish-property-post', [PropertiesController::class, 'publishPropertyPost']);
Route::post('/general-remove-published-property-photo', [PropertiesController::class, 'removePropertyPhoto']);
Route::post('/general-add-published-property-photo', [PropertiesController::class, 'addPropertyPhoto']);
Route::post('/general-update-published-property-photo-sequence', [PropertiesController::class, 'updatePhotosSequence']);
Route::post('/general-update-published-property-name', [PropertiesController::class, 'updatePropertyName']);
Route::post('/general-update-published-property-type', [PropertiesController::class, 'updatePropertyTypeInProperty']);
Route::post('/general-update-published-property-desc', [PropertiesController::class, 'updatePropertyDesc']);
Route::post('/general-update-published-property-floorplan', [PropertiesController::class, 'updatePropertyFloorplan']);
Route::post('/general-add-published-property-amenity', [PropertiesController::class, 'addAmenityInProperty']);
Route::post('/general-remove-published-property-amenity', [PropertiesController::class, 'removeAmenityInProperty']);
Route::post('/general-remove-published-property-financing', [PropertiesController::class, 'removeFinancingInProperty']);
Route::post('/general-add-published-property-financing', [PropertiesController::class, 'addFinancingInProperty']);


/*
* Property Listings
*/
Route::get('/get-all-property-listed', [PropertyListingsController::class, 'getAllProperties']);
Route::get('/get-property-agent/{agentId}', [PropertyListingsController::class, 'getPropertiesAgent']);
Route::get('/get-full-property-listed-info/{propId}', [PropertyListingsController::class, 'getFullPropertyViaPropId']);

Route::post('/publish-property-listing', [PropertyListingsController::class, 'PublishPropertyListingPost']);