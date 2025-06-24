
import React, { useState } from 'react';
import { Pill, Clock, AlertTriangle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Medicine } from '../types/medicine';

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard: React.FC<MedicineCardProps> = ({ medicine }) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      painkiller: 'bg-red-100 text-red-800 border-red-200',
      antibiotic: 'bg-green-100 text-green-800 border-green-200',
      vitamin: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      antacid: 'bg-blue-100 text-blue-800 border-blue-200',
      allergy: 'bg-purple-100 text-purple-800 border-purple-200',
      default: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Pill className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{medicine.name}</h3>
              <p className="text-sm text-gray-600">{medicine.genericName}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(medicine.category)}`}>
            {medicine.category}
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed">{medicine.description}</p>
      </div>

      {/* Quick Info */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-gray-600">Dosage</p>
              <p className="text-sm font-medium text-gray-900">{medicine.dosage}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Info className="h-4 w-4 text-green-500" />
            <div>
              <p className="text-xs text-gray-600">Strength</p>
              <p className="text-sm font-medium text-gray-900">{medicine.strength}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Section */}
      <div className="px-6 pb-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 rounded-lg px-3 transition-colors"
        >
          <span className="font-medium text-gray-900">Detailed Information</span>
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                Side Effects
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {medicine.sideEffects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Uses</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {medicine.uses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>

            {medicine.warnings && medicine.warnings.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                  Important Warnings
                </h4>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1">
                  {medicine.warnings.map((warning, index) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineCard;
