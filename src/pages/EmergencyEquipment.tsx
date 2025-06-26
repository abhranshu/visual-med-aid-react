import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EmergencyEquipment = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Emergency Equipment</h1>
      <p className="text-gray-700 mb-6">
        Emergency equipment includes life-saving devices such as defibrillators, oxygen cylinders, first aid kits, and stretchers. These are crucial for providing immediate care in critical situations and stabilizing patients before they reach a hospital.
      </p>
      <div className="mb-6">
        <img src="https://th.bing.com/th/id/R.48e7a29f2bdb772815fdf66e10c9c001?rik=uXqe%2fvsPOD0klg&riu=http%3a%2f%2fwww.alreyadamedical.com%2fprotected%2fimages%2faboutus%2f15179183931.jpg&ehk=dcauqZ%2bEdZwoYUVaBYqAFKCtCHcyII8SpifExQh4xSI%3d&risl=&pid=ImgRaw&r=0" alt="Emergency Equipment" className="w-full rounded-xl shadow" />
      </div>
      <div className="mt-8 text-center">
        <Link to="/equipment" className="text-orange-600 hover:underline">Back to Equipment Guide</Link>
      </div>
    </div>
  </div>
);

export default EmergencyEquipment; 