import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TraumaAssessment = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Trauma Assessment</h1>
      <p className="text-gray-700 mb-6">
        Trauma assessment is the systematic evaluation of a patient who has suffered a physical injury. It involves checking airway, breathing, circulation, disability, and exposure (ABCDE) to quickly identify and treat life-threatening conditions.
      </p>
      <div className="mb-6">
        <img src="https://www.osmosis.org/_next/image?url=https:%2F%2Fd16qt3wv6xm098.cloudfront.net%2F4WAGFzUwRvO3oG9T9pAleI4MSsGCPdxw%2F_.png&w=1920&q=75" alt="Trauma Assessment" className="w-full rounded-xl shadow" />
      </div>
      <div className="mt-8 text-center">
        <Link to="/emergency" className="text-blue-600 hover:underline">Back to Emergency Procedures</Link>
      </div>
    </div>
  </div>
);

export default TraumaAssessment; 