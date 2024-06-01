import React, { useState } from "react";
import Input from "./components/input";
import Bar from "./components/SideBar";
import Done from "./components/completed";
import Usrdetails from "./components/usr-details";
import Menulist from "./components/menuList";
import RandomQoutes from "./components/qoutes";

function App() {
  // defining state variable in parent component to be passed down to child as props
  const [usrName, setUsrName] = useState("");
  // defining a handler since passing setState as a prop is not advised
  const handleUsrNameInput = (event) => {
    setUsrName(event.target.value);

  };
  return (
    <div className="flex w-[100%] bg-[#CEE5F2] h-[100vh]">
      <Bar usrName={usrName} />
      <div id="container" className="w-[100%] flex pb-[1vw]">
        <Input />
      </div>
      <div>
        <Done />
      </div>
      <Usrdetails usrName={usrName} onUsrNameInput={handleUsrNameInput} />
      <Menulist />
      <RandomQoutes />
    </div>
  );
}
export default App;
