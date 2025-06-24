
import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Medicines', color: 'bg-gray-500 hover:bg-gray-600' },
  { id: 'painkiller', name: 'Pain Relief', color: 'bg-red-500 hover:bg-red-600' },
  { id: 'antibiotic', name: 'Antibiotics', color: 'bg-green-500 hover:bg-green-600' },
  { id: 'vitamin', name: 'Vitamins', color: 'bg-yellow-500 hover:bg-yellow-600' },
  { id: 'antacid', name: 'Antacids', color: 'bg-blue-500 hover:bg-blue-600' },
  { id: 'allergy', name: 'Allergy Relief', color: 'bg-purple-500 hover:bg-purple-600' },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${
            selectedCategory === category.id 
              ? `${category.color} ring-4 ring-white ring-opacity-50` 
              : `${category.color} opacity-80`
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
