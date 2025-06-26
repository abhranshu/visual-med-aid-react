import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Choking = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-50 py-12 px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Choking</h1>
      <p className="text-gray-700 mb-6">
        Choking occurs when an object becomes lodged in the throat or windpipe, blocking airflow. The Heimlich maneuver is a first aid procedure used to treat upper airway obstructions by foreign objects.
      </p>
      <div className="mb-6">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/PA9hpOnvtCk" title="Choking First Aid Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <a href="https://www.youtube.com/watch?v=PA9hpOnvtCk" target="_blank" rel="noopener noreferrer">
        <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Watch on YouTube</Button>
      </a>
      <div className="mt-8 text-center">
        <Link to="/first-aid" className="text-blue-600 hover:underline">Back to First Aid</Link>
      </div>
    </div>
  </div>
);

export default Choking; 