import { useLocalStorage } from '@vueuse/core'
import { createI18n, type Locale } from 'vue-i18n'

const locale = useLocalStorage('locale', 'en')

const i18n = createI18n({
  legacy: false,
  locale: '',
  messages: {}
})

const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob('../../locales/*.json')).map(([path, loadLocale]) => [
    path.match(/([\w-]*)\.json$/)?.[1],
    loadLocale
  ])
) as Record<any, () => Promise<{ default: Record<string, string> }>>

export const availableLocales = Object.keys(localesMap)

const loadedLanguages = [] as Locale[]

const setLanguage = (lang: Locale) => {
  i18n.global.locale.value = lang
  locale.value = lang
  if (typeof document !== 'undefined') document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

export const loadMessage = async (lang: Locale) => {
  if (i18n.global.locale.value === lang) return setLanguage(lang)
  if (loadedLanguages.includes(lang)) return setLanguage(lang)

  const { default: messages } = await localesMap[lang]()
  i18n.global.setLocaleMessage(lang, messages)
  loadedLanguages.push(lang)
  return setLanguage(lang)
}

export const setupI18n = (lang: Locale = locale.value) => {
  loadMessage(lang)
  return i18n
}
