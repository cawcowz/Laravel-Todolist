<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        // $todos = Todo::all();
        $todos = Todo::orderBy('id', 'desc')->get();
        $total = DB::table('todos')
            ->where('visible', 1)
            ->count();
        $completed = DB::table('todos')
            ->where('visible', 1)
            ->where('completed', 1)
            ->count();
        $remaining = DB::table('todos')
            ->where('visible', 1)
            ->where('completed', 0)
            ->count();

        return Inertia::render('Task', [
            'todos' => $todos,
            'total' => $total,
            'completed' => $completed,
            'remaining' => $remaining
        ]);
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'todo' => 'required|min:2'
        ]);

        Todo::create($fields);

        return redirect('/')->with('success' . 'Added');
    }
    public function update(Request $request)
    {
        // DB::table('todos')->where('id',$request->id)->update(['completed'=> true]); // update will be true
        $todo = Todo::find($request->id);
        $todo->completed =  !$todo->completed;
        $todo->save();

        // return back(200);
    }

    public function destroy(Request $request)
    {
        $todo = Todo::findOrFail($request->id);
        $todo->delete();
    }
}
