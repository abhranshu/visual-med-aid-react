import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SurgicalInstruments = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Surgical Instruments</h1>
      <p className="text-gray-700 mb-6">
        Surgical instruments are specialized tools used during operations to perform specific actions such as cutting, dissecting, grasping, holding, retracting, or suturing. Examples include scalpels, forceps, scissors, and clamps.
      </p>
      <div className="mb-6">
        <img src="https://th.bing.com/th/id/OIP.cnn0otr5u1T2Gz3T-bND6QHaHa?rs=1&pid=ImgDetMain" alt="Surgical Instruments" className="w-full rounded-xl shadow" />
      </div>
      <div className="mt-8 text-center">
        <Link to="/equipment" className="text-orange-600 hover:underline">Back to Equipment Guide</Link>
      </div>
    </div>
  </div>
);

export default SurgicalInstruments; 