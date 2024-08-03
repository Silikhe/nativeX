import React, { useState, useEffect } from 'react';
import { translateText } from '../utils/translate';

const TranslatedContent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('no');
  const [translations, setTranslations] = useState({ hello: '', welcome: '' });

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      // Update translations
      const fetchTranslations = async () => {
        const translatedHello = await translateText('Hello', storedLanguage);
        const translatedWelcome = await translateText('Welcome to our website', storedLanguage);
        setTranslations({ hello: translatedHello, welcome: translatedWelcome });
      };
      fetchTranslations();
    }
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>{translations.hello || 'Hello'}</h1>
      <p>{translations.welcome || 'Welcome to our website'}</p>
    </div>
  );
};

export default TranslatedContent;
