import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const BoneAid = () => {
  const { t } = useLanguage();

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1585435557343-3b092031d4c1?w=1920&h=400&fit=crop&auto=format&q=80" 
            alt="Bone aid background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/first-aid" 
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={handleButtonClick}
              >
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <img 
                src="/lovable-uploads/5f55752e-fd69-47ce-9791-2c559f7ce1be.png" 
                alt="Army Medical Corps Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{t('bone.aid') || 'Bone Aid'}</h1>
                  <p className="text-yellow-100 text-sm">{t('bone.aid.desc') || 'Immobilization and splinting for bone injuries'}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageToggle />
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={handleButtonClick}
              >
                {t('emergency.contact') || 'Emergency: 102'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('bone.aid') || 'Bone Aid'}</h2>
          <p className="text-lg text-gray-700 mb-6">
            {t('bone.aid.description') || 'Learn how to immobilize fractures and provide first aid for bone injuries using splints and other materials.'}
          </p>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>{t('assess.injury') || 'Assess injury'}</li>
            <li>{t('prepare.materials') || 'Prepare materials (splints, padding, bandages)'}</li>
            <li>{t('apply.splint') || 'Apply splint to immobilize the bone'}</li>
            <li>{t('secure.firmly') || 'Secure firmly but avoid cutting off circulation'}</li>
            <li>{t('monitor.circulation') || 'Monitor circulation and seek medical help'}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BoneAid; 