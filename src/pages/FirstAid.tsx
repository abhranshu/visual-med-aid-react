
import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FirstAid = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-red-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="mr-4 hover:text-red-200 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8" />
              <h1 className="text-2xl font-bold">First Aid Guide</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            First Aid Procedures
          </h2>
          <p className="text-lg text-gray-600">
            Essential first aid knowledge for Army medical personnel
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">CPR Procedures</h3>
            <p className="text-gray-600">Step-by-step cardiopulmonary resuscitation guide</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Wound Care</h3>
            <p className="text-gray-600">Proper cleaning and dressing of various wounds</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Emergency Splinting</h3>
            <p className="text-gray-600">Immobilization techniques for fractures</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAid;
