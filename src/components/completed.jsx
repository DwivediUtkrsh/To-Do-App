import Input from "./input"
import arrows from '/home/xenon/Work/VS Code/Coding/CS/React/doIt/doIt/src/images/arrows.png'
export default function Done(todos){
    function dis(){
        document.querySelector(".pleaseAdd").style.display = "none";
      }   
    return (
        <div className='bg-gray-200  h-[5%] w-[16%] text-[0.83vw] flex items-center justify-center rounded-[0.8vw] absolute bottom-2 left-2 pleaseAdd' onClick={dis}>
            <img src={arrows} alt="" className="w-[30%] rotate-[190deg] absolute z-10 bottom-[2vw] left-[14vw]" />
            <div>
              <p>Please add some tasks for the day</p>
            </div>
            <div className="indicate absolute bottom-[5vw] bg-white left-[19vw] w-[60%] flex items-center justify-center rounded-[1vw]">
                Click here to close
            </div>
        </div>
        
)
}