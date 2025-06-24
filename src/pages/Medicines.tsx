
import React, { useState } from 'react';
import { Activity, ArrowLeft, Filter, Grid, List, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MedicineCard from '../components/MedicineCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { medicines } from '../data/medicineData';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage();

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541797873665-6d4cc148885f?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Medicine background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={handleButtonClick}
              >
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <img 
                src="/lovable-uploads/5f55752e-fd69-47ce-9791-2c559f7ce1be.png" 
                alt="Army Medical Corps Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <Activity className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{t('medicine.database.title')}</h1>
                  <p className="text-green-100 text-sm">{t('pharmaceutical.reference')}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setViewMode(viewMode === 'grid' ? 'list' : 'grid');
                  handleButtonClick();
                }}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setShowFilters(!showFilters);
                  handleButtonClick();
                }}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Filter className="h-4 w-4 mr-2" />
                {t('filters')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10 relative">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Pharmacy background" 
              className="w-full h-48 object-cover rounded-2xl opacity-10"
            />
          </div>
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            {t('updated.database')}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('army.medicine.database')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('access.comprehensive')}
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
                  placeholder={t('search.medicines')}
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
              {filteredMedicines.length} {filteredMedicines.length === 1 ? t('medicine.found') : t('medicines.found')}
            </h3>
            {selectedCategory !== 'all' && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                {t('category')}: {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('no.medicines.found')}</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {t('try.adjusting')}
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                handleButtonClick();
              }}
              className="bg-green-600 hover:bg-green-700"
            >
              {t('clear.all.filters')}
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
