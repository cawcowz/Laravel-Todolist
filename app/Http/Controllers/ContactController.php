<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(){
        // dd('maintenance');
        return inertia('Contact');
    }
}
