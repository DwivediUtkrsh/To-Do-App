import { useState } from "react"    
import styles from "./usrname.module.css"
export default function Usrdetails(){
     const [usrName, setUsrName] = useState("");
    function handleUserdetails(e){
        e.preventDefault();
        setUsrName(""); 
        console.log(usrName)
    }
    
    return (
        <div className="usrname absolute left-[40vw] top-[20vw] flex items-center justify-center w-[27%] h-[12vw] rounded-2xl">
            <form onSubmit={handleUserdetails}>
            <input id="username" className="bg-[#CEE5F2] placeholder:text-[green]" onChange={(e) => setUsrName(e.target.value)} value={usrName} type="text" placeholder="Your Name" />
            </form>
        </div>  
    )   
    
    
}