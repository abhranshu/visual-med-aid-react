import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MassCasualty = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Mass Casualty Management</h1>
      <p className="text-gray-700 mb-6">
        Mass casualty management involves organizing resources and triage to provide the best possible care to the greatest number of people during disasters or large-scale emergencies. Triage, rapid assessment, and efficient evacuation are key components.
      </p>
      <div className="mb-6">
        <img src="https://th.bing.com/th/id/OIP.R3CKzrLXnvWe0V0rsbJ13wHaEq?rs=1&pid=ImgDetMain" alt="Mass Casualty Management" className="w-full rounded-xl shadow" />
      </div>
      <div className="mt-8 text-center">
        <Link to="/emergency" className="text-blue-600 hover:underline">Back to Emergency Procedures</Link>
      </div>
    </div>
  </div>
);

export default MassCasualty; 