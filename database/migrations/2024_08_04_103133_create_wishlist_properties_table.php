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
        Schema::create('wishlist_properties', function (Blueprint $table) {
            $table->string('id', 6)->primary();
            $table->string('wishlist', 12)->nullable();
            $table->string('property', 12)->nullable();
            $table->timestamps();

            /**
             * Foreign Keys
             */
            $table->foreign('wishlist')
                ->references('id')
                ->on('wishlists')
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
        Schema::dropIfExists('wishlist_properties');
    }
};
