import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Balance() {
  const { trans } = useContext(GlobalContext);

  const amounts = trans.map((item) => item.amount);
  console.log(amounts);
  // console.log(trans.reduce((n, {amount}) => n + amount, 0));
  const total = Number(amounts.reduce((acc, item) => (acc += item), 0)).toFixed(
    2
  );

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="w-[400px]">
      <h2 className="text-2xl mt-2 mb-3">
        Your Balance :
        <br />
        <span className="italic">${total}</span>
      </h2>
      <div className="flex gap-4">
        <h4 className="w-[190px] h-[50px] bg-green-300 items-center justify-center flex  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Income:<span>${income}</span>
        </h4>
        <h4 className="w-[190px] h-[50px] bg-red-300  items-center justify-center flex  text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Expense: <span>${expense}</span>
        </h4>
      </div>
      <div className="w-[400px] h-[1px] bg-gray-400 mt-5"></div>
    </div>
  );
}

export default Balance;
