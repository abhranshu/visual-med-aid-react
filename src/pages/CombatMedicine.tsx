import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CombatMedicine = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Combat Medicine</h1>
      <p className="text-gray-700 mb-6">
        Combat medicine focuses on providing medical care in battlefield or hostile environments. It includes rapid trauma care, hemorrhage control, airway management, and evacuation under fire, ensuring the best chance of survival for injured personnel.
      </p>
      <div className="mb-6">
        <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&h=400&fit=crop" alt="Combat Medicine" className="w-full rounded-xl shadow" />
      </div>
      <div className="mt-8 text-center">
        <Link to="/emergency" className="text-blue-600 hover:underline">Back to Emergency Procedures</Link>
      </div>
    </div>
  </div>
);

export default CombatMedicine; 