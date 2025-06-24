import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Clock, AlertTriangle } from 'lucide-react';
import { Medicine } from '../types/medicine';

interface MedicineCardProps {
  medicine: Medicine;
  viewMode?: 'grid' | 'list';
}

const MedicineCard: React.FC<MedicineCardProps> = ({ medicine, viewMode = 'grid' }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'painkiller': return 'bg-red-100 text-red-800 border-red-200';
      case 'antibiotic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'vitamin': return 'bg-green-100 text-green-800 border-green-200';
      case 'antacid': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'allergy': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'painkiller': return '💊';
      case 'antibiotic': return '🦠';
      case 'vitamin': return '🌿';
      case 'antacid': return '⚡';
      case 'allergy': return '🤧';
      default: return '💊';
    }
  };

  const getMedicineImage = (category: string, name: string) => {
    switch (category) {
      case 'painkiller':
        return 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=200&fit=crop&auto=format';
      case 'antibiotic':
        return 'https://images.unsplash.com/photo-1585435557343-3b092031d4c1?w=400&h=200&fit=crop&auto=format';
      case 'vitamin':
        return 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=200&fit=crop&auto=format';
      case 'antacid':
        return 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=200&fit=crop&auto=format';
      case 'allergy':
        return 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop&auto=format';
      default:
        return 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=200&fit=crop&auto=format';
    }
  };

  if (viewMode === 'list') {
    return (
      <Card className="hover:shadow-lg transition-all duration-200 border border-gray-100">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={getMedicineImage(medicine.category, medicine.name)} 
                  alt={medicine.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xl">{getCategoryIcon(medicine.category)}</span>
                  <div>
                    <CardTitle className="text-lg text-gray-900">{medicine.name}</CardTitle>
                    <p className="text-sm text-gray-500">{medicine.genericName}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3 line-clamp-2">{medicine.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{medicine.dosage}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Activity className="h-4 w-4" />
                    <span>{medicine.strength}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4">
              <Badge className={`${getCategoryColor(medicine.category)} border`}>
                {medicine.category}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group">
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1"></div>
      <div className="relative h-32 overflow-hidden">
        <img 
          src={getMedicineImage(medicine.category, medicine.name)} 
          alt={medicine.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-2 right-2">
          <Badge className={`${getCategoryColor(medicine.category)} border text-xs`}>
            {medicine.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <span className="text-xl">{getCategoryIcon(medicine.category)}</span>
            </div>
            <div>
              <CardTitle className="text-lg text-gray-900 group-hover:text-green-600 transition-colors">
                {medicine.name}
              </CardTitle>
              <p className="text-sm text-gray-500">{medicine.genericName}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {medicine.description}
        </p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Dosage:</span>
            <span className="font-medium text-gray-900">{medicine.dosage}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Strength:</span>
            <span className="font-medium text-gray-900">{medicine.strength}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-700">Primary Uses:</div>
          <div className="space-y-1">
            {medicine.uses.slice(0, 2).map((use, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="bg-green-100 text-green-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold mt-0.5">
                  ✓
                </div>
                <div className="text-sm text-gray-600">{use}</div>
              </div>
            ))}
            {medicine.uses.length > 2 && (
              <div className="text-xs text-gray-500 pl-6">
                +{medicine.uses.length - 2} more uses
              </div>
            )}
          </div>
        </div>
        
        {medicine.warnings.length > 0 && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center space-x-2 text-yellow-800">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Important Warning</span>
            </div>
            <p className="text-sm text-yellow-700 mt-1 line-clamp-2">
              {medicine.warnings[0]}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MedicineCard;
