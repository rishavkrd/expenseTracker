import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
export default function Expenses({ expenseItems }) {
  const defaultYear = 2022;
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const selectedYearHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredItems = expenseItems
  .filter((expense) => {
    console.log(expense.date.getFullYear().toString(), selectedYear);
    return expense.date.getFullYear().toString() === selectedYear;
  });
  let expenseContent = <p>"No Items to Show"</p>
  if(filteredItems.length>0){
    expenseContent = filteredItems.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        filteredYear={selectedYear}
        onSelectYear={selectedYearHandler}
      />
      <ExpensesChart expenses = {filteredItems}/>
      {expenseContent}
    </div>
  );
}
