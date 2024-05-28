import styles from "./line.module.css"
export default function Do({item, todos, setTodos}){
    function handleDelete(name){
        setTodos(todos.filter((todo) => todo !== item)) 
    }
    function handleStrike(name){
        const newArray = todos.map((todo) => 
            todo.name === name ? {...todo, done: !todo.done} : todo)
    setTodos(newArray)
    }
    const line = item.done ? styles.completed : "";
    if(item == ""){
        console.log("pls add a task")
    }else{
        return (
            <div id="todo" className="flex gap-10 m-2 ">
                <div className="bg-red-300 p-2 w-[10vw] flex justify-center him items-center rounded-xl select-none">
                    <span className={line} onClick={() => handleStrike(item.name)} id={item}>
                    {item.name}
                    </span>
                </div>
                
                <button id="cancel" className="bg-yellow-200 p-2 flex justify-center items-center rounded-[0.3vw]" onClick={() => handleDelete(item)}>X</button>
            </div>
        )
    }
}