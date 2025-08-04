// js/themeSystem.js

import { userPrefersDark, updateTheme, getSystemPrefersDark } from "./theme.js"

export const setupSystemThemeObserver = () => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const onSystemThemeChange = (e) => {
    if (userPrefersDark === null) updateTheme(e.matches)
  }

  if (mediaQuery.addEventListener)
    mediaQuery.addEventListener("change", onSystemThemeChange)
  else if (mediaQuery.addListener) mediaQuery.addListener(onSystemThemeChange)

  let lastPref = getSystemPrefersDark()
  setInterval(() => {
    const currentPref = getSystemPrefersDark()
    if (userPrefersDark === null && currentPref !== lastPref) {
      updateTheme(currentPref)
      lastPref = currentPref
    }
  }, 2000)
}
