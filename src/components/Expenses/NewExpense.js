import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./ExpenseForm.css";

export default function NewExpense(props) {
  const [formVisible, setFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  const onFormActionHandler = () => {
    setFormVisible(false);
  };
  const onAddButtonClick = () => {
    console.log("Show the Add Expense Form");
    setFormVisible(true);
  };
  let newExpenseContent = (
    <div className="new-expense__actions">
      <button onClick={onAddButtonClick}>Add New Expense</button>
    </div>
  );
  if (formVisible) {
    newExpenseContent = (
      <div>
        <ExpenseForm
          onFormAction={onFormActionHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <div className="new-expense__controls">{newExpenseContent}</div>
    </div>
  );
}
