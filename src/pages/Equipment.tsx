
import React from 'react';
import { Stethoscope, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Equipment = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-orange-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="mr-4 hover:text-orange-200 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div className="flex items-center space-x-3">
              <Stethoscope className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Medical Equipment</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Medical Equipment Guide
          </h2>
          <p className="text-lg text-gray-600">
            Essential medical equipment used in Army healthcare
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Diagnostic Tools</h3>
            <p className="text-gray-600">Stethoscopes, thermometers, and blood pressure monitors</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Surgical Instruments</h3>
            <p className="text-gray-600">Basic surgical tools and their proper usage</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Emergency Equipment</h3>
            <p className="text-gray-600">Defibrillators, oxygen tanks, and emergency kits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
