import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Office Supplies', category: 'Business', amount: 150, date: '2023-05-15' },
    { id: 2, name: 'Team Lunch', category: 'Food', amount: 85, date: '2023-05-18' }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Expense Tracker</h1>
      </header>
      <main className="app-main">
        <div className="form-section">
          <ExpenseForm onAddExpense={addExpense} />
        </div>
        <div className="controls-section">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <div className="table-section">
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </main>
    </div>
  );
}

export default App;