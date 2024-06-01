import trend from '../images/trend.gif'
import Usrdetails from "./usr-details";
export default function Menulist(){

    return (
        <div className="bg-red-400 min-h-[4vw] w-[15.3vw] absolute top-[3.4vw] left-[2vw] rounded-[0.2vw] menu-list hidden shadow-2xl drop-shadow-2xl p-5">
            <h2 className='text-xl inline-block userName-menuBar'></h2><img className='relative inline-block h-7 ml-2 mb-[0.3vw]' src={trend} alt="" />
        </div>
 )}