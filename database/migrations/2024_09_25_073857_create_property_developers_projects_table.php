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
        Schema::create('property_developers_projects', function (Blueprint $table) {
            $table->string("id", 12)->primary();
            $table->string("developer", 12)->nullable();
            $table->string("project_name")->nullable();
            $table->string("province_denormalized");
            $table->string("city_denormalized");
            $table->unsignedBigInteger("province")->nullable();
            $table->unsignedBigInteger("city")->nullable();
            $table->timestamps();

            /**
             * Foreign Keys
             */
            $table->foreign('developer')
                ->references('id')
                ->on('property_developers')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            $table->foreign('province')
                ->references('id')
                ->on('provinces')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            $table->foreign('city')
                ->references('id')
                ->on('cities')
                ->nullOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_developers_projects');
    }
};
