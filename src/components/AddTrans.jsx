import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function AddTrans() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const { setTrans } = useContext(GlobalContext);

  function nameChangeHandler(e) {
    setName(e.target.value);
  }

  function amountChangeHandler(e) {
    setAmount(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    // console.log(name)
    // console.log(amount)
    const newItem = {
      name,
      amount: +amount,
      id: Math.floor(Math.random() * 1000),
    };
    setTrans((prevData) => [...prevData, newItem]);
  }

  return (
    <div className="flex flex-col w-[400px]">
      <h2 className="text-2xl mt-2 mb-3">Add New Transactions:</h2>
      <form onSubmit={submitHandler} className="mt-2">
        <label htmlFor="name" className="text-[15px]">
          Transaction Name
        </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          className="bg-gray-100 border border-blue-200 rounded-lg p-1 mt-1 w-[250px]"
          placeholder="enter transaction details"
        />
        <br />
        <br />

        <label htmlFor="amount" className="text-[15px]">
          Amount
        </label>
        <br />
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={amountChangeHandler}
          className="bg-gray-100 border border-blue-200 rounded-lg p-1 mt-1 w-[250px]"
          placeholder="enter amount"
        />
        <br />
        <br />

        <button className="mt-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTrans;
