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
        Schema::create('ongoing_transaction_task_files', function (Blueprint $table) {
            $table->id();
            $table->text('old_filename');
            $table->text('filename');
            $table->string('file_type');
            $table->unsignedBigInteger('task')->nullable();
            $table->timestamps();

            $table->foreign('task')
            ->references('id')
            ->on('ongoing_transaction_tasks')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ongoing_transaction_task_files');
    }
};
