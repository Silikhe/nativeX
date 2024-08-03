// 'use client'

// import React, { useState, useEffect } from 'react';
// import { FaChevronDown } from 'react-icons/fa';
// import Image from 'next/image'; 

// type Language = 'Norway' | 'English'; // Add other languages as needed

// const LanguageDropdown: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState<Language>('Norway');

//   // Toggle the dropdown menu
//   const toggleDropdown = () => setIsOpen(!isOpen);

//   // Handle language selection
//   const handleSelect = (language: Language) => {
//     setSelectedLanguage(language);
//     setIsOpen(false);
//     localStorage.setItem('selectedLanguage', language); // Save to local storage
//   };

//   // Get flag image source based on selected language
//   const getFlagSrc = (language: Language) => {
//     switch (language) {
//       case 'Norway':
//         return '/images/norway.png';
//       case 'English':
//         return '/images/england.jpg';
//       default:
//         return '/images/default.png'; // Fallback image
//     }
//   };

//   // Load selected language from local storage on mount
//   useEffect(() => {
//     const storedLanguage = localStorage.getItem('selectedLanguage') as Language;
//     if (storedLanguage) {
//       setSelectedLanguage(storedLanguage);
//     }
//   }, []);

//   return (
//     <div className='relative inline-block text-left'>
//       <button
//         onClick={toggleDropdown}
//         className='flex items-center space-x-3 py-4 px-5 text-dark bg-gray-100 rounded-sm border hover:bg-primary-100 focus:outline-none'
//       >
//         <span className='flex items-center space-x-2'>
//           <Image src={getFlagSrc(selectedLanguage)} alt={`${selectedLanguage} Flag`} width={24} height={16} />
//           <span>{selectedLanguage}</span>
//         </span>
//         <FaChevronDown className='text-lg' />
//       </button>

//       {isOpen && (
//         <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-sm shadow-sm z-10'>
//           <ul className='py-1'>
//             <li>
//               <button
//                 onClick={() => handleSelect('Norway')}
//                 className='flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100'
//               >
//                 <Image src='/images/norway.png' alt='Norway Flag' width={24} height={16} />
//                 Norway
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => handleSelect('English')}
//                 className='flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100'
//               >
//                 <Image src='/images/england.jpg' alt='England Flag' width={24} height={16} />
//                 English
//               </button>
//             </li>
//             {/* Add more languages here */}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageDropdown;

'use client'
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { translateText } from '../utils/translate'; // Import translation utility

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('no'); // 'no' for Norwegian, 'en' for English
  const [translations, setTranslations] = useState({ hello: '', welcome: '' });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = async (language:any) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    localStorage.setItem('selectedLanguage', language);

    // Translate content and update state
    const translatedHello = await translateText('Hello', language);
    const translatedWelcome = await translateText('Welcome to our website', language);
    setTranslations({ hello: translatedHello, welcome: translatedWelcome });
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      handleSelect(storedLanguage); // Update translations on load
    }
  }, []);

  const getFlagSrc = (language:any) => {
    switch (language) {
      case 'no':
        return '/images/norway.png';
      case 'en':
        return '/images/england.jpg';
      default:
        return '/images/default.png'; // Fallback image
    }
  };

  return (
    <div className='relative inline-block text-left'>
      <button
        onClick={toggleDropdown}
        className='flex items-center space-x-3 py-4 px-5 text-dark bg-gray-100 rounded-sm border hover:bg-primary-100 focus:outline-none'
      >
        <span className='flex items-center space-x-2'>
          <Image src={getFlagSrc(selectedLanguage)} alt={`${selectedLanguage} Flag`} width={24} height={16} />
          <span>{selectedLanguage === 'no' ? 'Norwegian' : 'English'}</span>
        </span>
        <FaChevronDown className='text-lg' />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-sm shadow-sm z-10'>
          <ul className='py-1'>
            <li>
              <button
                onClick={() => handleSelect('no')}
                className='flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100'
              >
                <Image src='/images/norway.png' alt='Norway Flag' width={24} height={16} />
                Norway
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSelect('en')}
                className='flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100'
              >
                <Image src='/images/england.jpg' alt='England Flag' width={24} height={16} />
                English
              </button>
            </li>
            {/* Add more languages here */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
