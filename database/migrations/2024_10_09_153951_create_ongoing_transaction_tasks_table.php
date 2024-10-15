<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ongoing_transaction_tasks', function (Blueprint $table) {
            $table->id();
            $table->string("transaction", 16)->nullable();
            $table->string('requirement');
            $table->text('description');
            $table->string('status')->default('no-action');
            $table->text('reject_reason')->nullable();
            $table->timestamps();

            /**
             * Foreign keys
             */
            $table->foreign('transaction')
            ->references('id')
            ->on('ongoing_transactions')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ongoing_transaction_tasks');
    }
};
