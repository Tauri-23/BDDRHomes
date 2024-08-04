<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\wishlist;
use Illuminate\Http\Request;

class ClientWishlistController extends Controller
{
    public function getAllClientWishlist($clientId)
    {
        $wishlists = wishlist::where('client', $clientId)->get();

        return response()->json([
            'data' => $wishlists
        ]);
    }
}
