import ExpenseItem from "./Components/ExpenseItem";
function App() {
  const expenses = [
    {
      loe: 'LocationOfExpenditure 1',
      title: 'Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { loe: 'LocationOfExpenditure 2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      loe: 'LocationOfExpenditure 3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      loe: 'LocationOfExpenditure 4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} loe={expenses[0].loe}></ExpenseItem>
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} loe={expenses[1].loe}></ExpenseItem>
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} loe={expenses[2].loe}></ExpenseItem>
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} loe={expenses[3].loe}></ExpenseItem>
    </div>
  );
}

export default App;
