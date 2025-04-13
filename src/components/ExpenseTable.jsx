import '../styles/ExpenseTable.css';

function ExpenseTable({ expenses }) {
  return (
    <div className="table-container">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-expenses">No expenses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;