
import React, { useState } from 'react';
import { Search, Pill, Shield, Clock, AlertTriangle } from 'lucide-react';
import MedicineCard from '../components/MedicineCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { medicines } from '../data/medicineData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-3 rounded-full">
                <Pill className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">MediGuide</h1>
                <p className="text-sm text-gray-600">Your trusted medicine companion</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-green-600">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">FDA Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your <span className="text-blue-600">Medicine</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Search through our comprehensive database of medicines, get detailed information about dosages, 
            side effects, and interactions to make informed decisions about your health.
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredMedicines.length === 0 ? (
            <div className="text-center py-16">
              <AlertTriangle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No medicines found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600">
                  Found <span className="font-bold text-blue-600">{filteredMedicines.length}</span> medicines
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-blue-500 p-2 rounded-full">
              <Pill className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">MediGuide</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Always consult with healthcare professionals before taking any medication.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <AlertTriangle className="h-4 w-4" />
            <span>This information is for educational purposes only</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
