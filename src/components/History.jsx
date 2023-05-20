import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function History() {
  const { trans } = useContext(GlobalContext);
  return (
    <div className="mt-3 mb-5 w-[400px]">
      <h2 className="text-2xl mt-2 mb-3">History:</h2>
      {trans.map((item) => (
        <div key={item.id} className="flex justify-between ">
          <div className="">{item.name}</div>
          <div className={item.amount > 0 ? "text-green-400" : "text-red-400"}>
            ${item.amount}
          </div>
        </div>
      ))}
      <div className="w-[400px] h-[1px] bg-gray-400 mt-5"></div>
    </div>
  );
}

export default History;
