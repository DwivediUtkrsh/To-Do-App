import { useState } from "react"
import Do from "./doitem";
import Done from "./completed";

export default function Input(){ 
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name: "", done:"false"}); 
    const [todos, setTodos] = useState([]);
    function handleClick(e){
        e.preventDefault();
        if(todo == ""){
            console.log("pls add a task")
        }else{
        setTodos([...todos, todo]);
        setTodo({name: "", done:"false"});
        }
    }
    function reset(){
        location.reload();
    }
return (
<div className="add-task flex flex-col items-center  pt-10 bg-[#CEE5F2] w-[100%]">
    <div className="list bg-[#CEE5F2]  w-[100%] flex flex-col items-center justify-center pt-7 pb-7 whitespace-nowrap overflow-x-hidden overflow-y-auto">
            {todos.map((item) => (
        <Do key={item.name} item = {item} setTodos={setTodos} todos = {todos}/> 
    ))}
         </div>
         <form onSubmit={handleClick}>
            <div className="form items-centre justify-center flex gap-1">
            <i class="ri-add-circle-fill"></i> <input className="bg-[#CEE5F2] pl-1 placeholder:text-[green] outline-none" onChange={(e) => setTodo({name: e.target.value})} value={todo.name}  type="text" autoFocus placeholder="Add Task" />
            </div>
        {/* <button className="m-[2vw] p-1 border-red-900 border-4" type="submit">Add</button> */}
        <button className="m-[2vw] p-[1vw] border-[#6f97ae] rounded-xl border-4 absolute right-[0vw] bottom-[0vw]" onClick={reset} type="reset">Remove all Tasks</button>
    </form>
</div>
)}