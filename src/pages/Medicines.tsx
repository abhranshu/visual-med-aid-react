
import React, { useState } from 'react';
import { Activity, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MedicineCard from '../components/MedicineCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { medicines } from '../data/medicineData';

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-green-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="mr-4 hover:text-green-200 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div className="flex items-center space-x-3">
              <Activity className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Medicine Database</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Army Medicine Database
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive medicine information for Army medical personnel
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        </div>

        {filteredMedicines.length === 0 ? (
          <div className="text-center py-16">
            <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No medicines found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                Found <span className="font-bold text-green-600">{filteredMedicines.length}</span> medicines
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedicines.map((medicine) => (
                <MedicineCard key={medicine.id} medicine={medicine} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Medicines;
