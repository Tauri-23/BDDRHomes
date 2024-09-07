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
        Schema::create('published_properties_financings', function (Blueprint $table) {
            $table->string('id', 6)->primary();
            $table->string('property', 12)->nullable();
            $table->string('financing', 6)->nullable();
            $table->timestamps();

            /**
             * Foreign Keys
             */
            $table->foreign('property')
                ->references('id')
                ->on('published_properties')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();

            $table->foreign('financing')
                ->references('id')
                ->on('property_financings')
                ->nullOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('published_properties_financings');
    }
};
