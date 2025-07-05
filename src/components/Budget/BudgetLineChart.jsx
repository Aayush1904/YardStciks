import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BudgetLineChart = ({ data }) => {
  const formatted = data.map((item) => ({
    month: item.month,
    amount: item.amount,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white p-2 rounded-lg shadow-md border border-gray-300">
          <p className="text-sm font-medium text-gray-800">Month: {payload[0].payload.month}</p>
          <p className="text-sm text-gray-600">Budget: ₹{payload[0].payload.amount}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-5 rounded-md shadow-sm">
      <h4 className="text-lg font-semibold mb-4">Monthly Budget Trend</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={formatted}>
          <defs>
            <linearGradient id="budgetGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="amount" stroke="#875cf5" fill="url(#budgetGradient)" strokeWidth={3} dot={{ r: 3, fill: "#ab8df8" }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetLineChart;
