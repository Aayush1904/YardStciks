import React from 'react';
import { MdDelete } from 'react-icons/md';

const BudgetList = ({ budgets, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {budgets.map((b) => (
        <div key={b._id} className="p-4 rounded-lg border bg-white shadow-sm flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">{b.icon} {b.category}</h4>
            <p className="text-sm text-gray-600">₹{b.amount} / {b.month}</p>
          </div>
          <button onClick={() => onDelete(b._id)} className="text-red-500 hover:text-red-700">
            <MdDelete className="text-xl" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BudgetList;