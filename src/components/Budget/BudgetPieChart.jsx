import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CustomTooltip from "../Charts/CustomTooltip"
import CustomLegend from '../Charts/CustomLegend';
const COLORS = ['#875cf5', '#22c55e', '#f97316', '#ec4899', '#0ea5e9', '#facc15'];

const BudgetPieChart = ({ budgets }) => {
  const chartData = budgets.map((b) => ({
    name: b.category,
    amount: b.amount,
  }));

  return (
    <div className="bg-white p-5 rounded-md shadow-sm">
      <h4 className="text-lg font-semibold mb-4">Budget Distribution</h4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            labelLine={false}
            label={({ name }) => name}
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
          <Legend content={CustomLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetPieChart;
