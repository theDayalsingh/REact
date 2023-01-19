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
  let expensesList=expenses.map((item,index)=>{
    return <ExpenseItem date={expenses[index].date} title={expenses[index].title} amount={expenses[index].amount} loe={expenses[index].loe}></ExpenseItem>
  })
  return (
    <div>
      <h2>Let's get started!</h2>
      {expensesList}
       </div>
  );
}

export default App;
