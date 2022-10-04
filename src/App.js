import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 3000,
      date: new Date(2022, 9, 2),
    },
    {
      id: "e2",
      title: "Lot",
      amount: 15000,
      date: new Date(2022, 9, 2),
    },
    {
      id: "e3",
      title: "Bills",
      amount: 3000,
      date: new Date(2022, 9, 2),
    },
  ];
  return (
    <div>
      <h2>Expense App</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
