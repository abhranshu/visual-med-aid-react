
import React, { useState } from 'react';
import { Shield, ArrowLeft, Clock, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FirstAid = () => {
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);

  const procedures = [
    {
      id: 'cpr',
      title: 'CPR Procedures',
      urgency: 'critical',
      time: '2-4 minutes',
      description: 'Life-saving cardiopulmonary resuscitation techniques',
      steps: ['Check responsiveness', 'Call for help', 'Check pulse', 'Begin chest compressions'],
      category: 'Emergency',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      id: 'wound-care',
      title: 'Wound Care',
      urgency: 'high',
      time: '5-10 minutes',
      description: 'Proper cleaning and dressing of various wounds',
      steps: ['Stop bleeding', 'Clean wound', 'Apply antiseptic', 'Dress wound'],
      category: 'Trauma',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop'
    },
    {
      id: 'splinting',
      title: 'Emergency Splinting',
      urgency: 'medium',
      time: '10-15 minutes',
      description: 'Immobilization techniques for fractures',
      steps: ['Assess injury', 'Prepare materials', 'Apply splint', 'Secure firmly'],
      category: 'Orthopedic',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031d4c1?w=400&h=300&fit=crop'
    },
    {
      id: 'shock',
      title: 'Shock Management',
      urgency: 'critical',
      time: '1-3 minutes',
      description: 'Recognition and treatment of shock symptoms',
      steps: ['Assess vitals', 'Position patient', 'Maintain airway', 'Monitor closely'],
      category: 'Emergency',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=300&fit=crop'
    },
    {
      id: 'burns',
      title: 'Burn Treatment',
      urgency: 'high',
      time: '5-15 minutes',
      description: 'Immediate care for thermal and chemical burns',
      steps: ['Cool the burn', 'Remove debris', 'Apply dressing', 'Pain management'],
      category: 'Trauma',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      id: 'choking',
      title: 'Choking Response',
      urgency: 'critical',
      time: '1-2 minutes',
      description: 'Heimlich maneuver and airway clearance',
      steps: ['Assess airway', 'Back blows', 'Abdominal thrusts', 'Check mouth'],
      category: 'Emergency',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'from-red-500 to-red-600';
      case 'high': return 'from-orange-500 to-orange-600';
      case 'medium': return 'from-yellow-500 to-yellow-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleProcedureClick = (procedureId: string) => {
    setSelectedProcedure(procedureId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1920&h=400&fit=crop" 
            alt="Emergency medical background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={handleButtonClick}
              >
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">First Aid Guide</h1>
                  <p className="text-red-100 text-sm">Emergency Medical Procedures</p>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={handleButtonClick}
            >
              Emergency: 102
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=400&fit=crop" 
              alt="Medical equipment background" 
              className="w-full h-64 object-cover rounded-2xl opacity-10"
            />
          </div>
          <div className="inline-flex items-center bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <AlertCircle className="h-4 w-4 mr-2" />
            Critical Emergency Protocols
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            First Aid Procedures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential life-saving procedures and emergency medical protocols for Army personnel. 
            Master these techniques to provide effective immediate care in critical situations.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Golden Hour</div>
                <div className="text-gray-600">Critical first 60 minutes</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">6 Procedures</div>
                <div className="text-gray-600">Essential protocols</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+ Lives</div>
                <div className="text-gray-600">Potentially saved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure) => (
            <div
              key={procedure.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer"
              onClick={() => handleProcedureClick(procedure.id)}
            >
              <div className="relative h-48">
                <img 
                  src={procedure.image} 
                  alt={procedure.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${getUrgencyColor(procedure.urgency)} opacity-60`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border bg-white/90 ${getUrgencyBadge(procedure.urgency)}`}>
                    {procedure.urgency.toUpperCase()}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="text-sm text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {procedure.time}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {procedure.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {procedure.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="text-sm font-medium text-gray-700">Quick Steps:</div>
                  {procedure.steps.slice(0, 2).map((step, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <div className="text-sm text-gray-600">{step}</div>
                    </div>
                  ))}
                  {procedure.steps.length > 2 && (
                    <div className="text-xs text-gray-500 pl-7">
                      +{procedure.steps.length - 2} more steps
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    {procedure.category}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClick();
                    }}
                  >
                    View Full Guide
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact Card */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=300&fit=crop" 
              alt="Emergency background" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative">
            <AlertCircle className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Emergency Situations</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              In life-threatening emergencies, always call for immediate medical assistance while providing first aid.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={handleButtonClick}
              >
                Emergency: 102
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={handleButtonClick}
              >
                Army Medical: 1912
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstAid;
