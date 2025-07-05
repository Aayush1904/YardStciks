import React, { useState } from 'react';

const AddBudgetForm = ({ onAddBudget }) => {
  const [budget, setBudget] = useState({
    category: '',
    icon: '💰',
    amount: '',
    month: '',
  });

  const handleChange = (key, value) => {
    setBudget({ ...budget, [key]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <input
          value={budget.category}
          onChange={(e) => handleChange('category', e.target.value)}
          placeholder="Food, Travel, etc"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          type="text"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
        <input
          value={budget.amount}
          onChange={(e) => handleChange('amount', e.target.value)}
          placeholder="e.g. 3000"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          type="number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Month</label>
        <input
          value={budget.month}
          onChange={(e) => handleChange('month', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          type="month"
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={() => onAddBudget(budget)}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md"
        >
          Add Budget
        </button>
      </div>
    </div>
  );
};

export default AddBudgetForm;
