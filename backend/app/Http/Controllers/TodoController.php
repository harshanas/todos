<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Todo;

class TodoController extends Controller
{
    public function get(){
        return ['data' => Todo::get() ];
    }

    public function create(Request $request){
        $todo = new Todo();
        $todo->description = $request['description'];
        $todo->status = 0;
        $todo->save();

        return ['status' => 'success'];
    }

    public function update($id, Request $request){
        $todo = Todo::find($id);
        $todo->description = $request['description'] ? $request['description'] : $todo->description;
        $todo->status = $request['status'] ? $request['status'] :  $todo->status;
        $todo->save();
        return ['status' => 'success'];
    }

    public function delete($id){
        $todo = Todo::find($id);
        $todo->delete();
        return ['status' => 'success'];
    }
}
