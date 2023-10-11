/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const [expenseYear, setExpenseYear] = useState("2019");
  let filterInfoYears = "2020, 2021 & 2022";

  if (expenseYear === "2020") {
    filterInfoYears = "2019, 2021 & 2022";
  } else if (expenseYear === "2021") {
    filterInfoYears = "2019, 2020 & 2022";
  } else if (expenseYear === "2022") {
    filterInfoYears = "2019, 2020 & 2021";
  } else {
    filterInfoYears = "2020, 2021 & 2022";
  }

  const onChangeFilter = (year) => {
    setExpenseYear(year);
    console.log(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter expenseYear={onChangeFilter} />
      <p>Data for years {filterInfoYears} are hidden</p>
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
