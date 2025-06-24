
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center space-x-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'en' ? 'हिंदी' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
