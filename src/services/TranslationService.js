
import { translations } from '../locales/translations';

let currentLanguage = 'en'; // Default language

export const setLanguage = (lang) => {
  currentLanguage = lang;
};

// Use implicit return for a cleaner arrow function
export const trans = (key) => translations[currentLanguage][key] || key;