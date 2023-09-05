import "./ExpenseForm.css";
import { useState } from "react";
export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const onTitleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }
    const onAmountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }
    const onDateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
        // console.log("Form: ", event.target.value.getFullYear())
    }
    const formSubmitHandler = (event)=>{
        event.preventDefault()
        const data = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(data);
        props.onFormAction();
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    const onCancelHandler = ()=>{
        props.onFormAction();
    }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={onTitleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={onAmountChangeHandler} min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={onDateChangeHandler} min="2000-01-01" max="2030-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancelHandler}>Cancel</button>
      </div>
    </form>
  );
}
