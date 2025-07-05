import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CustomTooltip from '../Charts/CustomTooltip';
import CustomLegend from '../Charts/CustomLegend';

const BudgetVsActualChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-md font-semibold mb-2">Budget vs Actual</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend content={CustomLegend} />
          <Bar dataKey="budget" fill="#875cf5" radius={[10, 10, 0, 0]} />
          <Bar dataKey="actual" fill="#ffb347" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetVsActualChart;
