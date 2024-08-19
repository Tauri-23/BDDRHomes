<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AdminAddAgent extends Mailable
{
    use Queueable, SerializesModels;

    public $username, $password;

    public function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('pembopayapp@gmail.com', 'BDDRHomes')
        ->subject('BDDRHomes Login Credentials.')
        ->view('EmailSend.AdminCreateAgentSendCredentials')
        ->with([
            'username' => $this->username,
            'password' => $this->password,
        ]);
    }
}
