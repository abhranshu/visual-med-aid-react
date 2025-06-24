
import React, { useState } from 'react';
import { Search, Shield, Activity, Stethoscope, AlertTriangle, ArrowRight, Users, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'first-aid',
      name: 'First Aid',
      description: 'Essential emergency medical procedures and protocols',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      href: '/first-aid',
      count: '25+ Procedures',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop'
    },
    {
      id: 'medicines',
      name: 'Medicine Database',
      description: 'Comprehensive pharmaceutical reference guide',
      icon: <Activity className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      href: '/medicines',
      count: '500+ Medicines',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031d4c1?w=600&h=400&fit=crop'
    },
    {
      id: 'equipment',
      name: 'Medical Equipment',
      description: 'Essential medical devices and their usage',
      icon: <Stethoscope className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600',
      href: '/equipment',
      count: '100+ Devices',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
    },
    {
      id: 'emergency',
      name: 'Emergency Protocols',
      description: 'Critical response procedures for urgent situations',
      icon: <AlertTriangle className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      href: '/emergency',
      count: '50+ Protocols',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop'
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, label: 'Active Users', value: '10K+' },
    { icon: <Award className="h-6 w-6" />, label: 'Medical Units', value: '500+' },
    { icon: <MapPin className="h-6 w-6" />, label: 'Locations', value: '50+' }
  ];

  const handleSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=600&fit=crop" 
            alt="Medical background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Army Medicine Guide</h1>
                <p className="text-blue-200 text-sm">Comprehensive Medical Resource Platform</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Emergency Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=800&fit=crop" 
            alt="Medical team" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            🇮🇳 Trusted by Indian Army Medical Corps
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Advanced Medical
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Knowledge System
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Empowering Army medical personnel with instant access to critical medical information, 
            protocols, and emergency procedures for enhanced battlefield healthcare.
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search medicines, procedures, equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
              />
              <Button 
                className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={handleSearch}
              >
                Search
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
              Comprehensive Medical Resources
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access specialized medical knowledge across all critical areas of Army healthcare
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
                    <span>Explore Resources</span>
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
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=600&fit=crop" 
            alt="Medical equipment" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h3 className="text-3xl font-bold mb-4">Quick Access Portal</h3>
            <p className="text-xl text-blue-200">Navigate directly to critical medical resources</p>
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
                <span className="text-xl font-bold">Army Medicine Guide</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Comprehensive medical resource platform designed specifically for 
                Indian Army medical personnel and emergency response teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
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
              <h4 className="font-semibold mb-4 text-blue-400">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Emergency: 102</p>
                <p>Support: medical@army.gov.in</p>
                <p>© 2025 Indian Army Medical Corps</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>Developed for the Indian Army Medical Corps • Secure • Reliable • Always Available</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
