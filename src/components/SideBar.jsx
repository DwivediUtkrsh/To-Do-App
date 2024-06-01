import PfpName from "./pfp-name";
import sidepanelClose from '../images/sidepanelClose.png'

export default function Bar(usrName) {
  return (
    <div className="bg-[#ACCBE1] w-[20vw] h-[100%] p-4">
      <PfpName usrName={usrName} />
      <div className="sidebarOpnCls">
        {/* <img src={sidepanelClose} className="h-8" alt="" /> */}
      </div>
    </div>
  );
}