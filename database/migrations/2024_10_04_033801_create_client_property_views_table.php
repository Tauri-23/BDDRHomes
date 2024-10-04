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
        Schema::create('client_property_views', function (Blueprint $table) {
            $table->id();
            $table->string('client', 6)->nullable();
            $table->string('property', 12)->nullable();
            $table->integer('viewed_times');
            $table->timestamps();

            $table->foreign('client')
            ->references('id')
            ->on('user_clients')
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
        Schema::dropIfExists('client_property_views');
    }
};
