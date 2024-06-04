import { FaBeer } from 'react-icons/fa';
import { FaTasks } from "react-icons/fa";
import { HiMiniInbox } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { FaCalendarDays } from "react-icons/fa6";
import tasksNav from '../images/tasksNav.gif'
import calendarNav from '../images/calendarNav.png'
import inboxNav from '../images/inboxNav.png'
import upcomingNav from '../images/upcomingNav.png'
export default function Nav(){

    return (
        <div className=" h-[18vw] p-2 mt-10 mr-[1vw] flex gap-2">
            <div className="icons h-[17vw] flex flex-col left-5 gap-4 text-xl items-center fixed justify-start">
            <FaTasks />
            <HiMiniInbox />
            <CiCalendar />
            <FaCalendarDays />
            </div>
            <div className="items h-[17vw] relative left-8 flex flex-col gap-3 items-start pl-1 justify-start " >
                <p className='Tasks-P'>Tasks</p>
                <p className='Inbox-P'>Inbox</p>
                <p className='Calendar-P'>Calendar</p>
                <p className='Upcoming-P'>Upcoming</p>
            </div>
        </div>
)}