import "./styles.css";

export const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input name="title" type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input name="amount" type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input name="date" type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
