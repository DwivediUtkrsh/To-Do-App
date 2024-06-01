import hamster from "../images/hamster.jpg";
import Usrdetails from "./usr-details";
export default function PfpName(usrName) {
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
    <div className="flex gap-2">
      <div className="pfp h-[2.2vw] w-[2.2vw] rounded-full object-contain border-[#6f97ae] border-[0.2vw] bg-[#ACCBE1] p-[0.15vw]">
        <img className="h-[100%] w-[100%] rounded-full" src={hamster} alt="" />
      </div>
      <div className="user-name text-[rgb(91,131,154)] font-bold flex h-[1.5vw] w-[6vw] self-center text-xl">
        <p className="user-nameP mr-[0.2vw]">User</p>
        <div className="arrow hidden" onClick={displayMenuList}><i className="ri-arrow-drop-down-line text-[1.5vw] h-[1vw] relative"></i>
        <i className="ri-arrow-drop-up-line text-[1.5vw] h-[1vw] relative hidden"></i></div>
      </div>
    </div>
  );
}