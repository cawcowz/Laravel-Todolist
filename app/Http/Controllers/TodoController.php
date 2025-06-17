<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index(){
        
        // $todolist = Todo::latest('todo')->get();
        $todolist = Todo::all();
        // dd($todolist);
        return Inertia::render('Todo',['todos' => $todolist]);
    }
}
