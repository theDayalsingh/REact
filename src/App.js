import React from 'react'
import Expenses from "./Components/Expenses/Expenses";

const App=()=> {
  const expenses = [
    {
      id: '1',
      title: 'Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: '2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: '3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: '4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
      </div>
  );
}

export default App;
