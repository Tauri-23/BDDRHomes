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
        Schema::create('ongoing_transactions', function (Blueprint $table) {
            $table->string("id", 16)->primary();
            $table->string("client", 6)->nullable();
            $table->string("agent",6)->nullable();
            $table->string("property",12)->nullable();
            $table->string("status")->default("pending");
            $table->timestamps();


            /**
             * Foreign Keys
             */
            $table->foreign(columns: 'client')
                ->references('id')
                ->on('user_clients')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            $table->foreign(columns: 'agent')
                ->references('id')
                ->on('user_agents')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            $table->foreign(columns: 'property')
                ->references('id')
                ->on('published_properties')
                ->nullOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ongoing_transactions');
    }
};
