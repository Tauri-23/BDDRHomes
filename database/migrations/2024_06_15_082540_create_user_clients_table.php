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
        Schema::create('user_clients', function (Blueprint $table) {
            $table->string('id', 6)->primary();

            $table->string('firstname');
            $table->string('middlename')->nullable();
            $table->string('lastname');
            $table->string('gender');
            $table->date('bdate');

            $table->string('email')->unique();
            $table->string('username')->unique();
            $table->string('phone')->unique();
            $table->string('password');

            $table->string('pfp')->nullable();

            $table->string('monthly_income')->nullable();
            $table->string('work')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_clients');
    }
};
