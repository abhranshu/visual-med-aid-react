
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'army.medicine.guide': 'Army Medicine Guide',
    'comprehensive.medical.resource': 'Comprehensive Medical Resource Platform',
    'emergency.contact': 'Emergency Contact',
    
    // Hero Section
    'trusted.by.army': '🇮🇳 Trusted by Indian Army Medical Corps',
    'advanced.medical': 'Advanced Medical',
    'knowledge.system': 'Knowledge System',
    'empowering.army': 'Empowering Army medical personnel with instant access to critical medical information, protocols, and emergency procedures for enhanced battlefield healthcare.',
    'search.placeholder': 'Search medicines, procedures, equipment...',
    'search': 'Search',
    
    // Stats
    'active.users': 'Active Users',
    'medical.units': 'Medical Units',
    'locations': 'Locations',
    
    // Categories
    'comprehensive.medical.resources': 'Comprehensive Medical Resources',
    'access.specialized': 'Access specialized medical knowledge across all critical areas of Army healthcare',
    'first.aid': 'First Aid',
    'first.aid.desc': 'Essential emergency medical procedures and protocols',
    'procedures': 'Procedures',
    'medicine.database': 'Medicine Database',
    'medicine.database.desc': 'Comprehensive pharmaceutical reference guide',
    'medicines': 'Medicines',
    'medical.equipment': 'Medical Equipment',
    'medical.equipment.desc': 'Essential medical devices and their usage',
    'devices': 'Devices',
    'emergency.protocols': 'Emergency Protocols',
    'emergency.protocols.desc': 'Critical response procedures for urgent situations',
    'protocols': 'Protocols',
    'explore.resources': 'Explore Resources',
    
    // Quick Access
    'quick.access.portal': 'Quick Access Portal',
    'navigate.directly': 'Navigate directly to critical medical resources',
    
    // Footer
    'quick.links': 'Quick Links',
    'contact': 'Contact',
    'emergency': 'Emergency',
    'support': 'Support',
    'developed.for': 'Developed for the Indian Army Medical Corps • Secure • Reliable • Always Available',
    
    // Medicine Page
    'medicine.database.title': 'Medicine Database',
    'pharmaceutical.reference': 'Comprehensive Pharmaceutical Reference',
    'filters': 'Filters',
    'updated.database': 'Updated Database • Last Sync: Today',
    'army.medicine.database': 'Army Medicine Database',
    'access.comprehensive': 'Access comprehensive pharmaceutical information including dosages, side effects, and usage guidelines for military medical applications.',
    'search.medicines': 'Search medicines by name, generic name, or description...',
    'medicines.found': 'Medicines Found',
    'medicine.found': 'Medicine Found',
    'category': 'Category',
    'no.medicines.found': 'No medicines found',
    'try.adjusting': 'Try adjusting your search terms or category filter to find what you\'re looking for.',
    'clear.all.filters': 'Clear All Filters',
    
    // Equipment Page
    'equipment.guide': 'Medical Equipment Guide',
    'essential.equipment': 'Essential medical equipment used in Army healthcare',
    'diagnostic.tools': 'Diagnostic Tools',
    'diagnostic.desc': 'Stethoscopes, thermometers, and blood pressure monitors',
    'surgical.instruments': 'Surgical Instruments',
    'surgical.desc': 'Basic surgical tools and their proper usage',
    'emergency.equipment': 'Emergency Equipment',
    'emergency.equipment.desc': 'Defibrillators, oxygen tanks, and emergency kits',
    
    // Emergency Page
    'emergency.procedures': 'Emergency Procedures',
    'critical.emergency.protocols': 'Critical emergency protocols for Army medical situations',
    'trauma.assessment': 'Trauma Assessment',
    'trauma.desc': 'Primary and secondary survey protocols',
    'mass.casualty': 'Mass Casualty Events',
    'mass.casualty.desc': 'Triage and management of multiple casualties',
    'combat.medicine': 'Combat Medicine',
    'combat.medicine.desc': 'Field medicine under combat conditions'
  },
  hi: {
    // Header
    'army.medicine.guide': 'सेना चिकित्सा गाइड',
    'comprehensive.medical.resource': 'व्यापक चिकित्सा संसाधन प्लेटफॉर्म',
    'emergency.contact': 'आपातकालीन संपर्क',
    
    // Hero Section
    'trusted.by.army': '🇮🇳 भारतीय सेना चिकित्सा कोर द्वारा भरोसेमंद',
    'advanced.medical': 'उन्नत चिकित्सा',
    'knowledge.system': 'ज्ञान प्रणाली',
    'empowering.army': 'बेहतर युद्धक्षेत्र स्वास्थ्य सेवा के लिए महत्वपूर्ण चिकित्सा जानकारी, प्रोटोकॉल और आपातकालीन प्रक्रियाओं तक तत्काल पहुंच के साथ सेना चिकित्सा कर्मियों को सशक्त बनाना।',
    'search.placeholder': 'दवाइयां, प्रक्रियाएं, उपकरण खोजें...',
    'search': 'खोजें',
    
    // Stats
    'active.users': 'सक्रिय उपयोगकर्ता',
    'medical.units': 'चिकित्सा इकाइयां',
    'locations': 'स्थान',
    
    // Categories
    'comprehensive.medical.resources': 'व्यापक चिकित्सा संसाधन',
    'access.specialized': 'सेना स्वास्थ्य सेवा के सभी महत्वपूर्ण क्षेत्रों में विशेष चिकित्सा ज्ञान तक पहुंच',
    'first.aid': 'प्राथमिक चिकित्सा',
    'first.aid.desc': 'आवश्यक आपातकालीन चिकित्सा प्रक्रियाएं और प्रोटोकॉल',
    'procedures': 'प्रक्रियाएं',
    'medicine.database': 'दवा डेटाबेस',
    'medicine.database.desc': 'व्यापक फार्मास्युटिकल संदर्भ गाइड',
    'medicines': 'दवाइयां',
    'medical.equipment': 'चिकित्सा उपकरण',
    'medical.equipment.desc': 'आवश्यक चिकित्सा उपकरण और उनका उपयोग',
    'devices': 'उपकरण',
    'emergency.protocols': 'आपातकालीन प्रोटोकॉल',
    'emergency.protocols.desc': 'तत्काल स्थितियों के लिए महत्वपूर्ण प्रतिक्रिया प्रक्रियाएं',
    'protocols': 'प्रोटोकॉल',
    'explore.resources': 'संसाधन देखें',
    
    // Quick Access
    'quick.access.portal': 'त्वरित पहुंच पोर्टल',
    'navigate.directly': 'महत्वपूर्ण चिकित्सा संसाधनों तक सीधे नेविगेट करें',
    
    // Footer
    'quick.links': 'त्वरित लिंक',
    'contact': 'संपर्क',
    'emergency': 'आपातकाल',
    'support': 'सहायता',
    'developed.for': 'भारतीय सेना चिकित्सा कोर के लिए विकसित • सुरक्षित • विश्वसनीय • हमेशा उपलब्ध',
    
    // Medicine Page
    'medicine.database.title': 'दवा डेटाबेस',
    'pharmaceutical.reference': 'व्यापक फार्मास्युटिकल संदर्भ',
    'filters': 'फिल्टर',
    'updated.database': 'अपडेटेड डेटाबेस • अंतिम सिंक: आज',
    'army.medicine.database': 'सेना दवा डेटाबेस',
    'access.comprehensive': 'सैन्य चिकित्सा अनुप्रयोगों के लिए खुराक, दुष्प्रभाव और उपयोग दिशानिर्देशों सहित व्यापक फार्मास्युटिकल जानकारी तक पहुंच।',
    'search.medicines': 'नाम, जेनेरिक नाम, या विवरण द्वारा दवाइयां खोजें...',
    'medicines.found': 'दवाइयां मिलीं',
    'medicine.found': 'दवा मिली',
    'category': 'श्रेणी',
    'no.medicines.found': 'कोई दवा नहीं मिली',
    'try.adjusting': 'आप जो खोज रहे हैं उसे खोजने के लिए अपने खोज शब्दों या श्रेणी फिल्टर को समायोजित करने का प्रयास करें।',
    'clear.all.filters': 'सभी फिल्टर साफ़ करें',
    
    // Equipment Page
    'equipment.guide': 'चिकित्सा उपकरण गाइड',
    'essential.equipment': 'सेना स्वास्थ्य सेवा में उपयोग होने वाले आवश्यक चिकित्सा उपकरण',
    'diagnostic.tools': 'निदान उपकरण',
    'diagnostic.desc': 'स्टेथोस्कोप, थर्मामीटर और रक्तचाप मॉनिटर',
    'surgical.instruments': 'शल्य चिकित्सा उपकरण',
    'surgical.desc': 'बुनियादी शल्य चिकित्सा उपकरण और उनका उचित उपयोग',
    'emergency.equipment': 'आपातकालीन उपकरण',
    'emergency.equipment.desc': 'डिफाइब्रिलेटर, ऑक्सीजन टैंक और आपातकालीन किट',
    
    // Emergency Page
    'emergency.procedures': 'आपातकालीन प्रक्रियाएं',
    'critical.emergency.protocols': 'सेना चिकित्सा स्थितियों के लिए महत्वपूर्ण आपातकालीन प्रोटोकॉल',
    'trauma.assessment': 'आघात मूल्यांकन',
    'trauma.desc': 'प्राथमिक और द्वितीयक सर्वेक्षण प्रोटोकॉल',
    'mass.casualty': 'सामूहिक हताहत घटनाएं',
    'mass.casualty.desc': 'कई हताहतों की छंटाई और प्रबंधन',
    'combat.medicine': 'युद्धक चिकित्सा',
    'combat.medicine.desc': 'युद्ध की स्थिति में फील्ड मेडिसिन'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
