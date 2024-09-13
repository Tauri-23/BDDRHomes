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
        Schema::create('client_prefered_locations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('province')->nullable();
            $table->string('client', 6)->nullable();
            $table->timestamps();

            /**
             * Foreign Keys
             */
            $table->foreign(columns: 'client')
                ->references('id')
                ->on('user_clients')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            $table->foreign(columns: 'province')
                ->references('id')
                ->on('provinces')
                ->nullOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_prefered_locations');
    }
};
