<?php

namespace App\Providers;

use App\Contracts\IGenerateAgentPasswordService;
use App\Contracts\IGenerateAgentUsernameService;
use App\Contracts\IGenerateFilenameService;
use App\Contracts\IGenerateIdService;
use App\Services\GenerateAgentPasswordService;
use App\Services\GenerateAgentUsernameService;
use App\Services\GenerateFilenameService;
use App\Services\GenerateIdService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //Generate Random Ids Services
        $this->app->bind(IGenerateIdService::class, GenerateIdService::class);
        $this->app->bind(IGenerateFilenameService::class, GenerateFilenameService::class);
        $this->app->bind(IGenerateAgentPasswordService::class, GenerateAgentPasswordService::class);
        $this->app->bind(IGenerateAgentUsernameService::class, GenerateAgentUsernameService::class);
    }
}
