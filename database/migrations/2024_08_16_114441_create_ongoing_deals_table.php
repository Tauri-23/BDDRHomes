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
        Schema::create('ongoing_deals', function (Blueprint $table) {
            $table->string('id', 12)->primary();
            $table->string('agent', 6)->nullable();
            $table->string('client', 6)->nullable();
            $table->string('property', 12)->nullable();

            $table->timestamps();

            /**
             * Foreign Keys
             */
            $table->foreign('client')
                ->references('id')
                ->on('user_clients')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            $table->foreign('agent')
                ->references('id')
                ->on('user_agents')
                ->nullOnDelete()
                ->cascadeOnUpdate();
            
            $table->foreign('property')
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
        Schema::dropIfExists('ongoing_deals');
    }
};
