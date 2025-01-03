import { useState, useCallback } from 'react';
import { en } from '../config/i18n/en';
import { zh } from '../config/i18n/zh';

type Language = 'en' | 'zh';
type Translations = typeof en;

export function useLanguage() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const t = useCallback((key: string) => {
    const translations = currentLang === 'en' ? en : zh;
    return key.split('.').reduce((obj: any, k) => obj?.[k], translations) || key;
  }, [currentLang]);

  const toggleLanguage = useCallback(() => {
    setCurrentLang(prev => prev === 'en' ? 'zh' : 'en');
  }, []);

  return {
    currentLang,
    t,
    toggleLanguage
  };
}