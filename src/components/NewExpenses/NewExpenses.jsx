/* eslint-disable react/prop-types */
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(expense);

    props.onAddNewExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
