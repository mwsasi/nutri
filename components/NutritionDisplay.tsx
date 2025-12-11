import React from 'react';
import { NutritionData } from '../types';
import MacroChart from './MacroChart';
import { Activity, Droplets, Flame, Wheat, Candy, Circle, Leaf } from 'lucide-react';

interface NutritionDisplayProps {
  data: NutritionData;
}

const NutritionDisplay: React.FC<NutritionDisplayProps> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in-up">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-8 border-b border-green-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 capitalize mb-2">{data.foodName}</h2>
              <div className="flex items-center text-gray-600 gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                  {data.servingSize}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold border shadow-sm ${
                    data.healthRating >= 7 ? 'bg-green-100 text-green-700 border-green-200' :
                    data.healthRating >= 4 ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                    'bg-red-100 text-red-700 border-red-200'
                  }`}>
                  Health Score: {data.healthRating}/10
                </span>
              </div>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-4xl font-extrabold text-green-600">{data.calories}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Calories</div>
            </div>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed italic border-l-4 border-green-400 pl-4">
            "{data.summary}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Chart Section */}
          <div className="p-6 md:col-span-1 flex flex-col items-center justify-center bg-gray-50/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Macro Breakdown</h3>
            <MacroChart data={data} />
            <div className="text-xs text-center text-gray-400 mt-2">Values in grams</div>
          </div>

          {/* Stats Grid */}
          <div className="p-8 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Detailed Nutrients</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {/* Protein */}
              <div className="flex flex-col p-4 rounded-2xl bg-blue-50 border border-blue-100 transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2 text-blue-700">
                  <Activity size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Protein</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.protein}g</span>
              </div>

              {/* Carbs */}
              <div className="flex flex-col p-4 rounded-2xl bg-yellow-50 border border-yellow-100 transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2 text-yellow-700">
                  <Wheat size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Carbs</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.carbs}g</span>
              </div>

              {/* Fat */}
              <div className="flex flex-col p-4 rounded-2xl bg-red-50 border border-red-100 transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2 text-red-700">
                  <Droplets size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Fat</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.fat}g</span>
              </div>

              {/* Fiber */}
              <div className="flex flex-col p-4 rounded-2xl bg-emerald-50 border border-emerald-100 transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2 text-emerald-700">
                  <Leaf size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Fiber</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.fiber}g</span>
              </div>

              {/* Sugar */}
              <div className="flex flex-col p-4 rounded-2xl bg-purple-50 border border-purple-100 transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2 text-purple-700">
                  <Candy size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Sugar</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.sugar}g</span>
              </div>

              {/* Calories (Mobile Only / Extra Emphasis) */}
              <div className="flex flex-col p-4 rounded-2xl bg-orange-50 border border-orange-100 md:hidden transition-transform hover:scale-105">
                <div className="flex items-center gap-2 mb-2 text-orange-700">
                  <Flame size={18} />
                  <span className="font-semibold text-sm uppercase tracking-wide">Energy</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{data.calories} kcal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDisplay;