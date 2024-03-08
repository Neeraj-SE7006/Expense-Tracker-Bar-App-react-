import React, { useState } from 'react';
import ExpenseItem from "./components/Expense/ExpenseItem.js";
import NewExpense from "./components/NewRxpense/NewExpense.js";
import ExpensesChart from './components/Expense/ExpensesChart.js';
import './App.css';
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: 'Room',
      amount: 100,
      date: new Date(2023, 2, 13),
    },
    {
      id: 2,
      title: 'LED',
      amount: 200,
      date: new Date(2023, 3, 12),
    },
  
    {
      id: 3,
      title: 'TV',
      amount: 300,
      date: new Date(2023, 1, 20),
    }
  ]);

  const [filteredYear, setFilteredYear] = useState('');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  
  const filterExpensesHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(exp => {
    if (!filteredYear) {
      return true; // Show all expenses if no year is selected
    }
    return exp.date.getFullYear().toString() === filteredYear;
  });

  let expenseCount;

  if (filteredExpenses.length === 1) {
    expenseCount = (
      <>
        <ExpenseItem
          key={filteredExpenses[0].id}
          date={filteredExpenses[0].date}
          title={filteredExpenses[0].title}
          amount={filteredExpenses[0].amount}
        />
        <p>Only a single expense here. Please add more...</p>
      </>
    );
  } else if (filteredExpenses.length > 1) {
    expenseCount = filteredExpenses.map((exp) => (
      <ExpenseItem key={exp.id} date={exp.date} title={exp.title} amount={exp.amount} />
    ));
  } else {
    expenseCount = <p>No items!</p>;
  }

  return (
    <div className="main-div">
      <NewExpense onAddExpense={addExpenseHandler} onFilterExpenses={filterExpensesHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {expenseCount}
    </div>
  );
}

export default App;
