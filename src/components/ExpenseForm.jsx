import { useState } from 'react'
import '../styles/ExpenseForm.css'

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Utilities',
    amount: '',
    date: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount)
    })
    setFormData({ name: '', category: 'Utilities', amount: '', date: '' })
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Expense Name</label>
        <input
          type="text"
          placeholder="e.g., Office Supplies"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="Utilities">Utilities</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Amount ($)</label>
        <input
          type="number"
          placeholder="0.00"
          step="0.01"
          min="0"
          value={formData.amount}
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
          required
        />
      </div>
      
      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  )
}

export default ExpenseForm