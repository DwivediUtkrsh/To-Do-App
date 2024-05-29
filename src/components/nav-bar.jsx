import PfpName from "./pfp-name";

export default function Nav({ usrName }) {
  return (
    <div className="bg-[#ACCBE1] w-[20vw] h-[100%] p-4">
      <PfpName usrName={usrName} />
    </div>
  );
}
