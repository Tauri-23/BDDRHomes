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
        Schema::create('published_property_units', function (Blueprint $table) {
            $table->string("id", 6)->primary();
            $table->string("property", 12)->nullable();
            $table->string("unit_code")->unique()->nullable();
            $table->float("lot_area")->nullable();
            $table->float("tcp")->nullable();
            $table->timestamps();


            /**
             * Foreign Keys
             */
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
        Schema::dropIfExists('published_property_units');
    }
};
