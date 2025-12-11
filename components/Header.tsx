import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              NutriScan <span className="text-green-600">AI</span>
            </h1>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            Powered by Gemini 2.5 Flash
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;