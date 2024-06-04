import React, { useState } from "react";
import Input from "./components/input";
import Bar from "./components/SideBar";
import Done from "./components/completed";
import Usrdetails from "./components/usr-details";
import Menulist from "./components/menuList";
import RandomQoutes from "./components/qoutes";
import Inbox from "./components/Inbox";
import Upcoming from "./components/Upcoming";
import Calendar from "./components/Calendar";

function App() {
  // defining state variable in parent component to be passed down to child as props
  const [usrName, setUsrName] = useState("");
  // defining a handler since passing setState as a prop is not advised
  const handleUsrNameInput = (event) => {
    setUsrName(event.target.value);

  };
  return (
    <div className="flex w-[100%] bg-[#CEE5F2] h-[100vh] overflow-hidden">
      <Bar usrName={usrName} />
      <Menulist />
      <div>
        <Done />
      </div>
      <Usrdetails usrName={usrName} onUsrNameInput={handleUsrNameInput} />
      <div id="container" className="w-[100%] flex overflow-hidden">
        <div id="Inbox" className="Inbox z-10 w-[96.65%] flex absolute h-[100vh] overflow-hidden">
        <Inbox />
        </div>
        <div id="Upcoming" className="upcoming z-10 w-[96.65%] flex absolute h-[100vh] overflow-hidden">
        <Upcoming />
        </div>
        <div id="Calendar" className="calendar z-10 w-[100%] flex absolute h-[100vh] overflow-hidden">
          <Calendar />
        </div>
        <div id="Tasks" className="z-10 w-[100%] flex absolute h-[100vh] overflow-hidden">
        <Input />
        <RandomQoutes />
        </div>
      </div>
    </div>
  );
}
export default App;
