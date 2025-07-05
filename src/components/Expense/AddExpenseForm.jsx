import React, { useState } from 'react';
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: '',
    amount: '',
    date: '',
    icon: '',
  });

  const handleChange = (key, value) =>
    setExpense({ ...expense, [key]: value });

  return (
    <>
      <div>
        <EmojiPickerPopup
          icon={expense.icon}
          onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
        />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expense Category
            </label>
            <input
              value={expense.category}
              onChange={({ target }) =>
                handleChange('category', target.value)
              }
              placeholder="Food, Rent, Travel, etc"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              value={expense.amount}
              onChange={({ target }) => handleChange('amount', target.value)}
              placeholder="500, 1200, etc"
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              value={expense.date}
              onChange={({ target }) => handleChange('date', target.value)}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="button"
            className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-md transition duration-200"
            onClick={() => onAddExpense(expense)}
          >
            Add Expense
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpenseForm;
