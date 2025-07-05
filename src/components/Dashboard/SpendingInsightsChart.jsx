import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../Charts/CustomTooltip';
import CustomLegend from '../Charts/CustomLegend';

const COLORS = ['#875cf5', '#ffb347', '#57cc99', '#ffd6a5', '#a29bfe', '#f67280'];

const SpendingInsightsChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-md font-semibold mb-2">Spending Insights</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
          <Legend verticalAlign="bottom" content={CustomLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingInsightsChart;
