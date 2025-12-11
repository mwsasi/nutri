import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { NutritionData } from '../types';

interface MacroChartProps {
  data: NutritionData;
}

const MacroChart: React.FC<MacroChartProps> = ({ data }) => {
  const chartData = [
    { name: 'Protein', value: data.protein, color: '#3b82f6' }, // Blue
    { name: 'Carbs', value: data.carbs, color: '#eab308' },    // Yellow
    { name: 'Fat', value: data.fat, color: '#ef4444' },        // Red
  ];

  // Calculate percentages for custom label or just visual sizing
  const total = data.protein + data.carbs + data.fat;

  if (total === 0) return null;

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => [`${value}g`, '']}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MacroChart;