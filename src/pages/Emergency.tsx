
import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Emergency = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="mr-4 hover:text-blue-200 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Emergency Procedures</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Emergency Medical Procedures
          </h2>
          <p className="text-lg text-gray-600">
            Critical emergency protocols for Army medical situations
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3">Trauma Assessment</h3>
            <p className="text-gray-600">Primary and secondary survey protocols</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3">Mass Casualty Events</h3>
            <p className="text-gray-600">Triage and management of multiple casualties</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3">Combat Medicine</h3>
            <p className="text-gray-600">Field medicine under combat conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
