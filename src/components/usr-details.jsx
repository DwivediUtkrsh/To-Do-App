import styles from "./usrname.module.css";

export default function Usrdetails({ usrName, onUsrNameInput }) {
  function handleSubmit(e) {
    e.preventDefault();
    document.querySelector(".usrname").style.display = "none"
    document.querySelector(".user-nameP").textContent = usrName;
  }

  return (
    <div className="usrname absolute flex-col left-[40vw] top-[20vw] flex items-center justify-between pt-4 pb-24 w-[27%] h-[12vw] rounded-2xl">
        <p className="text-[1vw]">Dear User, Please enter</p>
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          className="bg-[#CEE5F2] placeholder:text-[green] placeholder:text-center"
          onChange={onUsrNameInput}
          value={usrName}
          type="text"
          placeholder="Your Name"
          autoFocus
        />
      </form>
    </div>
  );
}