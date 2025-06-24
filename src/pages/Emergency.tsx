
import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const Emergency = () => {
  const { t } = useLanguage();

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1920&h=400&fit=crop&auto=format&q=80" 
            alt="Emergency medical background" 
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
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{t('emergency.procedures')}</h1>
                  <p className="text-blue-100 text-sm">{t('critical.emergency.protocols')}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageToggle />
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={handleButtonClick}
              >
                {t('emergency.contact')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&h=300&fit=crop&auto=format&q=80" 
              alt="Emergency medical background" 
              className="w-full h-48 object-cover rounded-2xl opacity-10"
            />
          </div>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="h-4 w-4 mr-2" />
            {t('emergency.protocols')}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('emergency.procedures')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('critical.emergency.protocols')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 border-l-4 border-l-red-500 group">
            <div className="bg-red-100 p-4 rounded-xl mb-6 group-hover:bg-red-200 transition-colors">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('trauma.assessment')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('trauma.desc')}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 border-l-4 border-l-red-500 group">
            <div className="bg-red-100 p-4 rounded-xl mb-6 group-hover:bg-red-200 transition-colors">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('mass.casualty')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('mass.casualty.desc')}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 border-l-4 border-l-red-500 group">
            <div className="bg-red-100 p-4 rounded-xl mb-6 group-hover:bg-red-200 transition-colors">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('combat.medicine')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('combat.medicine.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
