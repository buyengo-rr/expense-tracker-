import React, { useState } from "react";

const categories = ["Food", "Travel", "Utilities", "Entertainment", "Other"];

const ExpenseForm = ({ onAddExpense }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: categories[0],
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(form);
    setForm({ name: "", description: "", category: categories[0], amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="input" />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required className="input" />
      <select name="category" value={form.category} onChange={handleChange} className="input">
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required className="input" />
      <input name="date" type="date" value={form.date} onChange={handleChange} required className="input" />
      <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
