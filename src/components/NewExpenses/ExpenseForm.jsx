/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // multiple state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // multiple handler function
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
  };

  // alternative creating a shared handler function
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={titleChangeHandler} /> */}
          <input
            type="text"
            value={title}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* <input
            type="number"
            min="0.01"
            step="0,01"
            onChange={amountChangeHandler}
          /> */}
          <input
            type="text"
            value={amount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          /> */}
          <input
            type="date"
            value={date}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
