import { useLanguage } from '../context/LanguageContext';
import { getStrings, type Strings } from './index';

export function useStrings(): Strings {
  const { lang } = useLanguage();
  return getStrings(lang);
}
