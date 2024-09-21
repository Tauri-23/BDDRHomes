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
        Schema::create('financing_requirements', function (Blueprint $table) {
            $table->string("id", 6)->primary();
            $table->string("financing", 6)->nullable();
            $table->string("requirement");
            $table->longText("notes");
            $table->string("employment_type", 6)->nullable();
            $table->string("marital_status");
            $table->timestamps();

            
            /**
             * Foreign Keys
             */
            $table->foreign('financing')
                ->references('id')
                ->on('property_financings')
                ->nullOnDelete()
                ->cascadeOnUpdate();
            
            $table->foreign('employment_type')
                ->references('id')
                ->on('employment_types')
                ->nullOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('financing_requirements');
    }
};
