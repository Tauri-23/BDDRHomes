<?php

namespace App\Http\Controllers\Api;

use App\Contracts\IGenerateIdService;
use App\Http\Controllers\Controller;
use App\Models\ongoing_transaction_tasks;
use App\Models\ongoing_transactions;
use App\Models\user_clients;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    protected $generateId;
    public function __construct(IGenerateIdService $generateId)
    {
        $this->generateId = $generateId;
    }

    // GET
    public function GetAllOngoingTransactions($agentId)
    {
        return response()->json(
            ongoing_transactions::where("status", "ongoing")
                ->where("agent", $agentId)
                ->with(["client", "agent", "property"])->get()
        );
    }

    public function GetAllPendingTransactions()
    {
        return response()->json(ongoing_transactions::where("status", "pending")->with(["client", "agent", "property"])->get());
    }

    public function GetClientTransactionsWhere($clientId, $status)
    {
        return response()->json(
            ongoing_transactions::where("client", $clientId)
                ->where("status", $status)
                ->with(["client", "agent", "property"])->get()
        );
    }

    public function GetFullTransactionInfoById($transactionId)
    {
        $transaction = ongoing_transactions::where("id", $transactionId)->with(["client", "agent", "property", "tasks"])->first();

        return response()->json($transaction);
    }





    // POST
    public function CreateTransaction(Request $request)
    {
        // check if the transaction is existing (if there is a client id and property id but no agent id and its cancelled)
        $transactionExist = ongoing_transactions::where('client', $request->clientId)
        ->where('property', $request->propId)
        ->where('agent', null)
        ->where('status', 'cancelled')->first();

        if(!$transactionExist)
        {
            $transactionId = $this->generateId->generate(ongoing_transactions::class, 16);
            $transaction = new ongoing_transactions();
            $transaction->id = $transactionId;
            $transaction->client = $request->clientId;
            $transaction->property = $request->propId;
            $transaction->save();
            return response()->json([
                "status" => 200,
                "message" => "Success"
            ]);
        }
        else
        {
            $transactionExist->status = 'pending';
            $transactionExist->save();
            return response()->json([
                "status" => 200,
                "message" => "Success"
            ]);
        }
    }

    public function CreateTask(Request $request)
    {
        $task = new ongoing_transaction_tasks();
        $task->transaction = $request->transaction;
        $task->requirement = $request->req;
        $task->description = $request->note;
        $task->status = 'no-action';
        if($task->save())
        {
            return response()->json([
                'status' => 200,
                'task' => $task,
                'message' => 'Something went wrong when adding task please try again later.'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => 'Something went wrong when adding task please try again later.'
            ]);
        }
    }

    public function AgentUpdateTransaction(Request $request)
    {
        $localEmpReq = [
            ["req" => "2 valid ID's", "desc" => "Back to back with 3 specimen signature"],
            ["req" => "1 Month latest payslip", "desc" => "Payslip from your employer"],
            ["req" => "Company ID", "desc" => "ID of your company"],
        ];

        $transaction = ongoing_transactions::find($request->transactionId);
        $client = user_clients::find($transaction->client);
        $transaction->status = "ongoing";
        $transaction->agent = $request->agentId;

        if($client->employment_type == "478189") 
        {
            foreach($localEmpReq as $req)
            {
                $transaction_requirement = new ongoing_transaction_tasks();
                $transaction_requirement->transaction = $request->transactionId;
                $transaction_requirement->requirement = $req['req'];
                $transaction_requirement->description = $req['desc'];
                $transaction_requirement->save();
            }
        }

        if($transaction->save())
        {
            return response()->json([
                "status" => 200,
                "message" => 'Success'
            ]);
        }
        else
        {
            return response()->json([
                "status" => 401,
                "message" => 'Something went wrong when updating the transaction please try again later.'
            ]);
        }
    }

    public function AgentUpdateTransactionTaskStatus(Request $request)
    {
        $transaction = ongoing_transaction_tasks::find($request->taskId);

        if(!$transaction)
        {
            return response()->json([
                'status' => 404,
                'message' => 'Task not found'
            ]);
        }

        $transaction->status = $request->newStatus;
        $transaction->save();

        return response()->json([
            'status' => 200,
            'message' => 'Success'
        ]);
    }

    public function ClientUpdateTransaction(Request $request)
    {
        $transaction = ongoing_transactions::findOrFail($request->transactionId);
        $transaction->status = $request->newStatus;

        if($transaction->save())
        {
            return response()->json([
                "status" => 200,
                "message" => 'Transaction cancelled'
            ]);
        }
        else
        {
            return response()->json([
                "status" => 401,
                "message" => 'Something went wrong when cancelling the transaction please try again later.'
            ]);
        }
    }
}
