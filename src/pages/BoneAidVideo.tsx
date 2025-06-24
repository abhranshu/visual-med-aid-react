import React from 'react';
import { ArrowLeft, Play, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const BoneAidVideo = () => {
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
            alt="Bone aid video background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link 
                to="/bone-aid" 
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
                  <h1 className="text-2xl font-bold">{t('bone.aid') || 'Bone Aid'} - {t('video.guide') || 'Video Guide'}</h1>
                  <p className="text-yellow-100 text-sm">{t('step.by.step.instruction') || 'Step-by-step instruction video'}</p>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Play className="h-4 w-4 mr-2" />
              {t('instructional.video') || 'Instructional Video'}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('bone.aid') || 'Bone Aid'} {t('procedure') || 'Procedure'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('watch.complete') || 'Watch the complete step-by-step procedure for bone immobilization and fracture care.'}
            </p>
          </div>

          {/* Video Player */}
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full h-auto max-h-[600px]"
              poster="/lovable-uploads/5f55752e-fd69-47ce-9791-2c559f7ce1be.png"
            >
              <source src="/myvideo.mp4" type="video/mp4" />
              {t('video.not.supported') || 'Your browser does not support the video tag.'}
            </video>
          </div>

          {/* Video Description */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('what.you.learn') || 'What You Will Learn'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div className="text-gray-700">{t('assess.injury') || 'Assess injury and determine fracture type'}</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div className="text-gray-700">{t('prepare.materials') || 'Prepare splinting materials and tools'}</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div className="text-gray-700">{t('apply.splint') || 'Apply splint with proper technique'}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    4
                  </div>
                  <div className="text-gray-700">{t('secure.firmly') || 'Secure splint firmly but safely'}</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    5
                  </div>
                  <div className="text-gray-700">{t('monitor.circulation') || 'Monitor circulation and sensation'}</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">
                    6
                  </div>
                  <div className="text-gray-700">{t('seek.medical.help') || 'Seek immediate medical assistance'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bone-aid">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-yellow-500 text-yellow-700 hover:bg-yellow-50"
                onClick={handleButtonClick}
              >
                {t('back.to.guide') || 'Back to Text Guide'}
              </Button>
            </Link>
            <Link to="/first-aid">
              <Button 
                className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700"
                onClick={handleButtonClick}
              >
                {t('view.all.procedures') || 'View All Procedures'}
              </Button>
            </Link>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-6 text-white text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Shield className="h-6 w-6" />
            <span className="font-semibold">{t('emergency.notice') || 'Emergency Notice'}</span>
          </div>
          <p className="text-red-100">
            {t('emergency.notice.text') || 'This video is for educational purposes. In actual emergencies, always call for professional medical help immediately.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoneAidVideo; 