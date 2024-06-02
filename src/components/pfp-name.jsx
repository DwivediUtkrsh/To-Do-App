import hamster from "../images/hamster.jpg";
import Usrdetails from "./usr-details";
export default function PfpName(usrName) {
  var sidebarDisplay = 1;
  function sidebarWidth(){
    var sidebar = document.getElementById('SideBar')
    if(sidebarDisplay == 1){
    sidebar.classList.add("half")
    sidebar.classList.remove("full")
    document.querySelector(".pleaseAdd").style.display = "none";
    sidebarDisplay = 0;
    }else if(sidebarDisplay == 0){
      sidebar.classList.add("full")
      sidebar.classList.remove("half")
      sidebarDisplay = 1;
    }
    
  }
  var displaymenuList = 0 ;
  function displayMenuList(){
    
    if(displaymenuList == 0){
      document.querySelector(".menu-list").style.display = "initial";
      document.querySelector(".ri-arrow-drop-down-line").style.display = "none";
      document.querySelector(".ri-arrow-drop-up-line ").style.display = "initial";
      displaymenuList = 1;
    }else if(displaymenuList == 1){
      document.querySelector(".menu-list").style.display = "none";
      document.querySelector(".ri-arrow-drop-down-line").style.display = "initial";
      document.querySelector(".ri-arrow-drop-up-line ").style.display = "none";
      displaymenuList = 0;
    }
    
  }
  return (
    <div className="flex gap-2 h-12 border-blue-200 border-b-2">
      <div className="pfp fixed w-10 rounded-full object-contain left-2 border-[#6f97ae] border-[0.2vw] bg-[#ACCBE1] p-[0.15vw]" onClick={sidebarWidth}>
        <img className="h-[100%] w-[100%] rounded-full" src={hamster} alt="" />
      </div>
      <div className="user-name relative left-11 text-[rgb(91,131,154)] font-bold flex h-[1.5vw] w-[6vw]  text-xl">
        <p className="user-nameP mr-[0.2vw]">User</p>
        <div className="arrow hidden h-[2vw] w-[2vw]" onClick={displayMenuList}><i className="ri-arrow-drop-down-line text-[1.5vw] h-[1vw] relative"></i>
        <i className="ri-arrow-drop-up-line text-[1.5vw] h-[1vw] relative hidden"></i></div>
      </div>
    </div>
  );
}