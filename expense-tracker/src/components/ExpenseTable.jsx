import React from "react";

const ExpenseTable = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return <p className="text-gray-500 text-center">No expenses to display.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Amount ($)</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={e.id} className="odd:bg-white even:bg-gray-50">
              <td className="p-2 border">{e.name}</td>
              <td className="p-2 border">{e.description}</td>
              <td className="p-2 border">{e.category}</td>
              <td className="p-2 border">${parseFloat(e.amount).toFixed(2)}</td>
              <td className="p-2 border">{new Date(e.date).toLocaleDateString()}</td>
              <td className="p-2 border">
                <button onClick={() => onDelete(e.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
