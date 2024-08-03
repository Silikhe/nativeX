// utils/translate.js
const API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your actual API key

export const translateText = async (text, targetLanguage) => {
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
    }
  );

  const data = await response.json();
  return data.data.translations[0].translatedText;
};
