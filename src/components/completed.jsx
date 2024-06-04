import Input from "./input"
import arrows from '../images/arrows.png'
export default function Done(todos){
    function dis(){
        document.querySelector(".pleaseAdd").style.display = "none";
      }   
    return (
        <div className='bg-gray-200 h-[5%] w-[11%] text-[0.83vw] flex items-center justify-center rounded-[0.8vw] absolute bottom-2 left-2 pleaseAdd z-50'>
            <img src={arrows} alt="" className="w-[30%] rotate-[190deg] absolute z-10 bottom-[2vw] left-[10vw]" />
            <div>
              <p className="text-[100%]">Please add some tasks</p>
            </div>
            <div onClick={dis} className="indicate absolute bottom-[4.6vw] bg-white left-[13vw] w-[65%] flex items-center justify-center rounded-[1vw] cursor-pointer">
                Click here to close
            </div>
        </div>
)
}