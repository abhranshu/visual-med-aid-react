import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CPR = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-50 py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-red-700 mb-4">CPR (Cardiopulmonary Resuscitation)</h1>
      <p className="text-gray-700 mb-6">
        CPR is a life-saving technique useful in many emergencies, such as a heart attack or near drowning, in which someone's breathing or heartbeat has stopped. It combines chest compressions and artificial ventilation to manually preserve intact brain function until further measures are taken.
      </p>
      <div className="mb-6">
        <iframe width="100%" height="315" src="https://youtu.be/YEsQ36KeETo" title="CPR Training Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <a href="https://youtu.be/YEsQ36KeETo" target="_blank" rel="noopener noreferrer">
        <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Watch on YouTube</Button>
      </a>
      <div className="mt-8 text-center">
        <Link to="/first-aid" className="text-blue-600 hover:underline">Back to First Aid</Link>
      </div>
    </div>
  </div>
);

export default CPR; 