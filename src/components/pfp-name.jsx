import hamster from '../images/hamster.jpg'
import Usrdetails from './usr-details'
export default function PfpName(){
    
    return (
        <div className="flex gap-2">
            <div className="pfp h-[2.2vw] w-[2.2vw] rounded-full object-contain border-[#6f97ae] border-[0.2vw] bg-[#ACCBE1] p-[0.15vw]">
                <img className='h-[100%] w-[100%] rounded-full' src={hamster} alt="" />
            </div> 
            <div className="user-name text-[rgb(91,131,154)] font-bold h-[1.5vw] w-[6vw] self-center text-xl">Isshin
                <i className="ri-arrow-drop-down-line"></i>
                </div>
        </div>
)}