import tasksNav from '../images/tasksNav.gif'
import calendarNav from '../images/calendarNav.png'
import inboxNav from '../images/inboxNav.png'
import upcomingNav from '../images/upcomingNav.png'
export default function Nav(){

    return (
        <div className=" h-[18vw] p-2 mt-10 mr-[1vw] flex gap-2">
            <div className="icons h-[17vw] flex flex-col left-4 gap-4 items-center fixed justify-start">
                <img src={tasksNav} className='h-7  ' alt="" />
                <img src={inboxNav} className='h-7 ' alt="" />
                <img src={upcomingNav} className='h-7 ' alt="" />
                <img src={calendarNav} className='h-7 ' alt="" />
            </div>
            <div className="itemsw-[80%] h-[17vw] relative left-8 flex flex-col gap-4 items-start pl-1 justify-start">
                <p className='mb-1'>Tasks</p>
                <p className='mb-1'>Inbox</p>
                <p className='mb-1'>Upcoming</p>
                <p className='mb-1'>Calendar</p>
            </div>
        </div>
)}