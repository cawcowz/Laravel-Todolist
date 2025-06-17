import React ,{ useState }from "react";
import Header from "../Layout/header/Header";
import { Trash2 } from "lucide-react";
import { useForm } from "@inertiajs/react";


function Todo(props) {
    const [checkedItems, setCheckedItems] = useState({});
    const {post, delete:destroy} = useForm();
    // console.log(props.todos.completed);
    
    const toggleCheck = (id) => {
        post(`/update/${id}`,{
            preserveScroll: true, // ✅ This prevents scroll reset
        });
    

        setCheckedItems((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    const handleDelete = (id)=>{
        // console.log(id)
        destroy(`/destroy/${id}`,{
            preserveScroll: true
        })
    }

    return (
        <div>
            <div className="bg-white border-0 shadow-lg p-4">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold"> Your Task</p>
                 
                </div>

                {props.todos.map((todo) => {
                    return (
                        <div  key={todo.id} className="p-4 hover:bg-gray-100 flex gap-2 items-center  justify-between">
                            <div className="flex gap-2  ">
                                <div className="flex flex-col justify-center">
                                    <button
                                        onClick={() => toggleCheck(todo.id)}
                                        className={`w-4 h-4 rounded-full border-2 hover:scale-130 transition duration-200 
                                            
                                            ${todo.completed ? "bg-green-500 border-green-400" :"border-gray-400 hover:border-green-400" }  
                                        `}
                                    ></button>
                                </div>
                                <div className=" px-2 text-md">
                                   <p 
                                    className={
                                        // checkedItems[todo.id]  
                                            todo.completed
                                            ? " text-green-500 relative text-gray-800 after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-[2px] after:bg-green-500 after:rounded"
                                            : "border-gray-400"
                                    }
                                   > {todo.todo}</p>
                                </div>
                            </div>

                            <button onClick={()=> handleDelete(todo.id)} className="hover:bg-red-500/30 p-2 rounded-sm">
                                <Trash2 size={19} className="text-red-400" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
Todo.layout = (page) => <Header>{page}</Header>;
export default Todo;
