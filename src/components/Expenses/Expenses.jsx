/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const [expenseYear, setExpenseYear] = useState(undefined);

  const onChangeExpenseYear = (year) => {
    setExpenseYear(year);
    // if (expenseYear === '2019') {
    console.log(year);
    // }
  };
  return (
    <Card className="expenses">
      <ExpensesFilter expenseYear={onChangeExpenseYear} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}
