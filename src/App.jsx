import AddTrans from "./components/AddTrans";
import Balance from "./components/Balance";
import History from "./components/History";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold uppercase mt-8 mb-4 underline">
        Expense Tracker
      </h1>
      <Balance />
      <History />
      <AddTrans />
    </div>
  );
}

export default App;
