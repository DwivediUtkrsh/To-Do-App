import { useState } from "react";
import Nav from "./nav";
import PfpName from "./pfp-name";

export default function Bar(usrName) { 
  return (
    <div id="SideBar" className="bg-[#ACCBE1] h-[100%] p-4 overflow-hidden Side-bar absolute full z-50">
      <PfpName usrName={usrName} />
      <Nav />
    </div>
  );
}