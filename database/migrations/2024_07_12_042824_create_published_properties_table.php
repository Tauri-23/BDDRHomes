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
            $table->string('project', 12)->nullable();
            $table->text('project_model');

            // Project Address
            $table->text('province_denormalized');
            $table->text('city_denormalized');
            // $table->longText('description');

            // Developer
            $table->string('developer', 12)->nullable();

            // Specs
            $table->text('bedroom');
            $table->text('bath');
            $table->text('carport');
            $table->float('lot_area');
            $table->float('floor_area');
            $table->string('property_type', 6)->nullable();
            $table->integer('storey');

            // Finances
            $table->float('tcp');
            $table->float('dp_percent');
            $table->integer('dp_term_months');
            $table->float('loanable_percent');
            $table->float('loan_interest_rate');
            $table->json('loan_term_ma');
            $table->float('required_income_min');
            $table->float('required_income_max');

            
            $table->string('turnover');
            
            // active, sold out
            $table->string('status')->default('active');            

            // timestamps
            $table->timestamps();

            /**
             * Foreign Keys
             */
            $table->foreign('property_type')
                ->references('id')
                ->on('property_types')
                ->nullOnDelete()
                ->cascadeOnUpdate();
            

            $table->foreign('project')
                ->references('id')
                ->on('property_developers_projects')
                ->nullOnDelete()
                ->cascadeOnUpdate();
                

            $table->foreign('developer')
                ->references('id')
                ->on('property_developers')
                ->nullOnDelete()
                ->cascadeOnUpdate();

            // $table->foreign('agent')
            //     ->references('id')
            //     ->on('user_agents')
            //     ->nullOnDelete()
            //     ->cascadeOnUpdate();
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
