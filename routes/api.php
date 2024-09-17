<?php

use App\Http\Controllers\Api\AdminAgentController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\ClientWishlistController;
use App\Http\Controllers\Api\DevelopersController;
use App\Http\Controllers\Api\PropertiesController;
use App\Http\Controllers\Api\PropertyListingsController;
use App\Http\Controllers\Api\TeamsController;
use App\Http\Controllers\Api\TransactionController;
use App\Http\Controllers\ClientPreferedLocation;
use App\Http\Controllers\ProvinceController;
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
* Teams
*/
Route::get('/get-all-teams', [TeamsController::class, 'GetTeams']);

Route::post('/create-team', [TeamsController::class, 'CreateTeamPost']);


/*
* Admin Profile
*/
Route::get('/get-admin-info/{adminId}', [AdminController::class, 'FetchAdminInfo']);


/*
* Developers
*/
Route::get('/get-all-developers-with-properties', [DevelopersController::class, 'GetAllDevelopersWithProperties']);
Route::get('/get-all-developers', [DevelopersController::class, 'GetAllDevelopers']);

Route::post('/create-developer', [DevelopersController::class, 'CreateDeveloper']);





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
Route::post('/general-delete-property-permanently', [PropertiesController::class, 'deletePropertyPermanentlyPost']);

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





/*
* Clients
*/
Route::get('/get-all-clients', [ClientController::class, 'GetAllClients']);
Route::get('/get-clients-info/{clientId}', [ClientController::class, 'GetClientsInfo']);

Route::post('/update-client-pfp', [ClientController::class, 'updatePfp']);





/*
* Province
*/
Route::get('/get-all-provinces', [ProvinceController::class, 'getAllProvince']);





/* 
*  Client Prefered Location
*/
Route::get('/get-all-client-prefered-location/{clientId}', [ClientPreferedLocation::class, 'getAllClientPreferedLoc']);
Route::post('/update-client-prefered-location', [ClientPreferedLocation::class, 'updateClientPreferedLoc']);





/* 
*  Transactions
*/
Route::get('/get-all-pending-transactions', [TransactionController::class, 'GetAllPendingTransactions']);
Route::get('/get-all-pending-transactions-client/{clientId}', [TransactionController::class, 'GetPendingTransactionClient']);
Route::post('/create-transaction-from-client-post', [TransactionController::class, 'CreateTransaction']);