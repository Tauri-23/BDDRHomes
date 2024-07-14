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
        Schema::create('published_properties', function (Blueprint $table) {
            $table->string('id', 12)->primary();
            $table->text('name');
            $table->text('address');
            $table->longText('description');

            $table->text('bedroom');
            $table->text('bath');
            $table->text('carport');
            $table->float('lot_area');
            $table->float('floor_area');
            $table->string('property_type', 6)->nullable();

            $table->string('agent', 6)->nullable();

            $table->double('required_income');
            $table->string('status')->default('active');

            $table->timestamps();

            /**
             * Foreign Keys
             */
            $table->foreign('property_type')
                ->references('id')
                ->on('property_types')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            $table->foreign('agent')
                ->references('id')
                ->on('user_agents')
                ->nullOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listed_properties');
    }
};
