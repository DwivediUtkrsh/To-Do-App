import styles from "./usrname.module.css";

export default function Usrdetails({ usrName, onUsrNameInput }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(usrName);
  }

  return (
    <div className="usrname absolute left-[40vw] top-[20vw] flex items-center justify-center w-[27%] h-[12vw] rounded-2xl">
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          className="bg-[#CEE5F2] placeholder:text-[green]"
          onChange={onUsrNameInput}
          value={usrName}
          type="text"
          placeholder="Your Name"
        />
      </form>
    </div>
  );
}
