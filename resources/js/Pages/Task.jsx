import React from "react";
import Header from "../Layout/header/Header";
import { useForm } from "@inertiajs/react";
import Todo from "./Todo";
import { Plus } from "lucide-react";

function Task({ todos,completed,remaining, total}) {
    const { data, setData, post, errors } = useForm({
        todo: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/", {
            onSuccess: () => setData("todo", ""),
        });
        // setData('todo','')
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-center text-4xl font-bold text-gray-900 mb-2">
                    My Task
                </h1>
                <p className="text-center text-gray-600">Stay organized and productive.</p>

                {/* header */}
                <div className="w-full bg-white rounded-lg shadow-md p-5 mt-6 mb-6">
                    <form action="" onSubmit={submit}>
                        <span className="text-xl font-semibold flex items-center gap-2 mb-5">
                            <Plus className="h-5 w-5 text-blue-600"/>
                            Add New Task
                        </span>
                        <div className="flex items-center justify-between">
                            <input
                                value={data.todo}
                                onChange={(e) =>
                                    setData("todo", e.target.value)
                                }
                                type="text"
                                placeholder="Enter a task..."
                                className="flex-1 h-12 text-base border border-gray-200 p-2 mr-2"
                            />

                            <button className="bg-black hover:bg-black/90 px-5 py-3 text-white rounded-md">
                                Add Task
                            </button>
                        </div>
                        {errors.todo && (
                            <p className="text-red-500">{errors.todo}</p>
                        )}
                    </form>
                </div>

                {/* Dashboard */}
                <div className="flex  gap-4 mb-6">
                    <div className="flex-1 border-0 shadow-md bg-white text-center rounded-lg p-3">
                        <p className="text-2xl text-blue-400 font-semiBold">{total}</p>
                        Total Task
                    </div>
                    <div className="flex-1 border-0 shadow-md bg-white text-center rounded-lg p-3">
                        <p className="text-2xl text-green-400 font-semiBold">{completed}</p>
                        Completed
                    </div>
                    <div className="flex-1 border-0 shadow-md bg-white text-center rounded-lg p-3">
                        <p className="text-2xl text-red-400 font-semiBold">{remaining}</p>
                        Remaining
                    </div>
                </div>

                {/* to do */}
                <div>
                    <Todo todos={todos} />
                </div>
            </div>
        </div>
    );
}

Task.layout = (page) => <Header>{page}</Header>;
export default Task;
