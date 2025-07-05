// import React, { useState } from 'react'

// const AddIncomeForm = ({onAddIncome}) => {
//     const [income , setIncome] = useState({
//         source: "",
//         amount: "",
//         date: "",
//         icon: ""
//     });

//     const handleChange = (key , value) => setIncome({...income , [key]: value}); 
//   return (
//     <div>
//       <input value={income.source} onChange={({target}) => handleChange("source" , target.value)} label = "Income Source" placeholder='Freelance , Salary , etc' type='text' />

//         <input value={income.amount} onChange={({target}) => handleChange("amount" , target.value)} label = "Amount" placeholder='1000 , 2000 , etc' type='number' />

//         <input value={income.date} onChange={({target}) => handleChange("date" , target.value)} label = "Date" placeholder='YYYY-MM-DD' type='date' />

//         <div className='flex justify-end mt-6'>
//             <button type='button' className='add-btn add-btn-fill' onClick={() => onAddIncome(income)}>
//                 Add Income
//             </button>

//         </div>

//     </div>
//   )
// }

// export default AddIncomeForm

import React, { useState } from 'react';
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: '',
    amount: '',
    date: '',
    icon: '',
  });

  const handleChange = (key, value) =>
    setIncome({ ...income, [key]: value });

  return (
    <>
        <div>
            <EmojiPickerPopup icon = {income.icon} onSelect = {(selectedIcon) => handleChange("icon" , selectedIcon)} />
            <div className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Income Source
                </label>
                <input
                    value={income.source}
                    onChange={({ target }) => handleChange('source', target.value)}
                    placeholder="Freelance, Salary, etc"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                </label>
                <input
                    value={income.amount}
                    onChange={({ target }) => handleChange('amount', target.value)}
                    placeholder="1000, 2000, etc"
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                </label>
                <input
                    value={income.date}
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
                onClick={() => onAddIncome(income)}
                >
                Add Income
                </button>
            </div>
        </div>
    </>

  );
};

export default AddIncomeForm;
