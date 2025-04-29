import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchAndSort from "./components/SearchAndSort";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter((e) =>
    `${e.name} ${e.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortField) return 0;
    if (sortField === "amount") return parseFloat(a.amount) - parseFloat(b.amount);
    if (sortField === "date") return new Date(a.date) - new Date(b.date);
    return a[sortField].localeCompare(b[sortField]);
  });

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-indigo-700">💸 Expense Tracker</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border p-4 rounded shadow md:col-span-1">
          <h2 className="text-lg font-semibold text-indigo-600 mb-4">Add New Expense</h2>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="space-y-6 md:col-span-2">
          <div className="bg-white p-4 border rounded shadow">
            <SearchAndSort setSearch={setSearchTerm} setSortBy={setSortField} />
          </div>
          <div className="bg-white p-4 border rounded shadow">
            <ExpenseTable expenses={sortedExpenses} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
