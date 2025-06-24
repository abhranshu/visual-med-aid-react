import React, { useState } from 'react';
import { Search, Shield, Activity, Stethoscope, AlertTriangle, ArrowRight, Users, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const categories = [
    {
      id: 'first-aid',
      name: t('first.aid'),
      description: t('first.aid.desc'),
      icon: <Shield className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      href: '/first-aid',
      count: `25+ ${t('procedures')}`,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      id: 'medicines',
      name: t('medicine.database'),
      description: t('medicine.database.desc'),
      icon: <Activity className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      href: '/medicines',
      count: `500+ ${t('medicines')}`,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031d4c1?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      id: 'equipment',
      name: t('medical.equipment'),
      description: t('medical.equipment.desc'),
      icon: <Stethoscope className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600',
      href: '/equipment',
      count: `100+ ${t('devices')}`,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80'
    },
    {
      id: 'emergency',
      name: t('emergency.protocols'),
      description: t('emergency.protocols.desc'),
      icon: <AlertTriangle className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      href: '/emergency',
      count: `50+ ${t('protocols')}`,
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop&auto=format&q=80'
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, label: t('active.users'), value: '10K+' },
    { icon: <Award className="h-6 w-6" />, label: t('medical.units'), value: '500+' },
    { icon: <MapPin className="h-6 w-6" />, label: t('locations'), value: '50+' }
  ];

  const handleSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=600&fit=crop&auto=format&q=90" 
            alt="Medical background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <img 
                src="/lovable-uploads/5f55752e-fd69-47ce-9791-2c559f7ce1be.png" 
                alt="Army Medical Corps Logo" 
                className="h-20 w-20 object-contain"
              />
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{t('army.medicine.guide')}</h1>
                <p className="text-blue-200 text-sm">{t('comprehensive.medical.resource')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageToggle />
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {t('emergency.contact')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=800&fit=crop&auto=format&q=90" 
            alt="Medical team" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            {t('trusted.by.army')}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('advanced.medical')}
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('knowledge.system')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('empowering.army')}
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
              />
              <Button 
                className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={handleSearch}
              >
                {t('search')}
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/40">
                <div className="text-blue-600">{stat.icon}</div>
                <div>
                  <div className="font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('comprehensive.medical.resources')}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('access.specialized')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4">
                    <div className="text-sm font-medium text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {category.count}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white shadow-lg`}>
                      {category.icon}
                    </div>
                  </div>
                </div>
                <div className="relative p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span>{t('explore.resources')}</span>
                    <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=600&fit=crop&auto=format&q=80" 
            alt="Medical equipment" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h3 className="text-3xl font-bold mb-4">{t('quick.access.portal')}</h3>
            <p className="text-xl text-blue-200">{t('navigate.directly')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-200 group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="text-white mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <div className="text-white font-medium text-sm">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">{t('army.medicine.guide')}</span>
              </div>
              <p className="text-gray-400 max-w-md">
                {t('comprehensive.medical.resource')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">{t('quick.links')}</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.href}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">{t('contact')}</h4>
              <div className="space-y-2 text-gray-300">
                <p>{t('emergency')}: 102</p>
                <p>{t('support')}: medical@army.gov.in</p>
                <p>© 2025 Indian Army Medical Corps</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{t('developed.for')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
