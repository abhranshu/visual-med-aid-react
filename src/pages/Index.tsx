
import React, { useState } from 'react';
import { Search, Bell, Shield, Activity, Stethoscope, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'first-aid',
      name: 'First Aid',
      icon: <Shield className="h-16 w-16" />,
      color: 'bg-red-500 hover:bg-red-600',
      href: '/first-aid'
    },
    {
      id: 'medicines',
      name: 'Medicines',
      icon: <Activity className="h-16 w-16" />,
      color: 'bg-green-500 hover:bg-green-600',
      href: '/medicines'
    },
    {
      id: 'equipment',
      name: 'Medical Equipment',
      icon: <Stethoscope className="h-16 w-16" />,
      color: 'bg-orange-500 hover:bg-orange-600',
      href: '/equipment'
    },
    {
      id: 'emergency',
      name: 'Emergency Procedures',
      icon: <AlertTriangle className="h-16 w-16" />,
      color: 'bg-blue-600 hover:bg-blue-700',
      href: '/emergency'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-full mb-2">
                <Shield className="h-12 w-12 text-blue-700" />
              </div>
              <span className="text-xl font-bold">Medicine Book</span>
            </div>
            <div className="flex items-center">
              <Bell className="h-6 w-6 cursor-pointer hover:text-blue-200 transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the Army Medicine Guide
          </h2>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg md:text-xl font-medium text-gray-800">
            🇮🇳 Empowering Army Medical Personnel with Fast & Reliable Knowledge
          </p>
        </div>
      </section>

      {/* Search Box */}
      <section className="py-6">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="🔍 Search for medicine"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className={`${category.color} text-white rounded-2xl p-12 text-center transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="text-center text-gray-300">
            <p>Contact: support@medicineguide.in | © 2025 Medicine Guide</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
