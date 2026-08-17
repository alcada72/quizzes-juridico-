type Dictionary = Record<string, string>
type Translations = Record<'en' | 'pt', Dictionary>

const translations: Translations = {
    en: {},
    pt: {}
}

export function t(key: string, lang: 'en' | 'pt'): string {
  const dictionary = translations[lang] || translations['en']
  return dictionary[key] || translations['en'][key] || key
}