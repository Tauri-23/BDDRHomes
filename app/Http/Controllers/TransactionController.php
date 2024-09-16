<?php

namespace App\Http\Controllers;

use App\Contracts\IGenerateIdService;
use App\Models\ongoing_transactions;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    protected $generateId;
    public function __construct(IGenerateIdService $generateId)
    {
        $this->generateId = $generateId;
    }

    // GET
    public function GetAllPendingTransactions()
    {
        return response()->json(ongoing_transactions::where("status", "pending")->with(["client", "agent", "property"])->get());
    }

    public function GetPendingTransactionClient($clientId)
    {
        return response()->json(
            ongoing_transactions::where("status", "pending")
                ->where("client", $clientId)
                ->with(["client", "agent", "property"])->get()
        );
    }



    // POST
    public function CreateTransaction(Request $request)
    {
        $transactionId = $this->generateId->generate(ongoing_transactions::class, 16);
        $transaction = new ongoing_transactions();
        $transaction->id = $transactionId;
        $transaction->client = $request->clientId;
        $transaction->property = $request->propId;

        if($transaction->save())
        {
            return response()->json([
                "status" => 200,
                "message" => "Success"
            ]);
        }
        else
        {
            return response()->json([
                "status" => 400,
                "message" => "Failed creating transaction please try again later."
            ]);
        }
    }
}
