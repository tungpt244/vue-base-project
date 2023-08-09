import { useLocalStorage } from '@vueuse/core'
import { watch } from 'vue'

export const useDarkMode = () => {
  const isDarkMode = useLocalStorage('dark', false)
  const toggle = () => (isDarkMode.value = !isDarkMode.value)

  watch(
    isDarkMode,
    (value) => {
      if (value) {
        return document.documentElement.classList.add('dark')
      }
      return document.documentElement.classList.remove('dark')
    },
    { immediate: true }
  )
  return { isDarkMode, toggle }
}
