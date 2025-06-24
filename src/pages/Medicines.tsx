
import React, { useState } from 'react';
import { Activity, ArrowLeft, Filter, Grid, List, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MedicineCard from '../components/MedicineCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { medicines } from '../data/medicineData';

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link to="/" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <Activity className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Medicine Database</h1>
                  <p className="text-green-100 text-sm">Comprehensive Pharmaceutical Reference</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Updated Database • Last Sync: Today
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Army Medicine Database
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive pharmaceutical information including dosages, side effects, 
            and usage guidelines for military medical applications.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search medicines by name, generic name, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200"
                />
              </div>
            </div>
            {(showFilters || window.innerWidth >= 1024) && (
              <div className="lg:w-64">
                <CategoryFilter 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory} 
                />
              </div>
            )}
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {filteredMedicines.length} {filteredMedicines.length === 1 ? 'Medicine' : 'Medicines'} Found
            </h3>
            {selectedCategory !== 'all' && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Category: {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
              </span>
            )}
          </div>
        </div>

        {/* Results */}
        {filteredMedicines.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Activity className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No medicines found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Try adjusting your search terms or category filter to find what you're looking for.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-green-600 hover:bg-green-700"
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-4"
          }>
            {filteredMedicines.map((medicine) => (
              <MedicineCard 
                key={medicine.id} 
                medicine={medicine} 
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Medicines;
