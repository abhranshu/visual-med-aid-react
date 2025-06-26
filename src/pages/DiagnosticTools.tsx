import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DiagnosticTools = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Diagnostic Tools</h1>
      <p className="text-gray-700 mb-6">
        Diagnostic tools are essential for assessing a patient's condition. Common tools include stethoscopes, blood pressure monitors, thermometers, and otoscopes. These instruments help healthcare professionals make accurate diagnoses and monitor patient health.
      </p>
      <div className="mb-6">
        <img src="https://th.bing.com/th/id/R.262e5274510ee51cf55771ca3c1e43e2?rik=exnn3DxRz8PVGg&riu=http%3a%2f%2feagle.co.ug%2fwp-content%2fuploads%2f2018%2f05%2fMedical-Equipment-1080x675.jpg&ehk=7Q7WP%2bHY69dMGd41J6cj5yEf3idaTGrAJtPy93vssrE%3d&risl=&pid=ImgRaw&r=0" alt="Diagnostic Tools" className="w-full rounded-xl shadow" />
      </div>
      <div className="mt-8 text-center">
        <Link to="/equipment" className="text-orange-600 hover:underline">Back to Equipment Guide</Link>
      </div>
    </div>
  </div>
);

export default DiagnosticTools; 