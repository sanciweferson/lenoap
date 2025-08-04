// js/themeEvents.js

import {
  themeDesktopButton,
  toggleMobileButton,
  toggleTheme,
  htmlElement,
  getSystemPrefersDark,
  applyEffectiveTheme,
  hideThemeWarning,
  showThemeWarning,
  setUserPrefersDark,
} from "./theme.js"

export const setupEventListeners = () => {
  if (themeDesktopButton)
    themeDesktopButton.addEventListener("click", toggleTheme)
  if (toggleMobileButton)
    toggleMobileButton.addEventListener("click", toggleTheme)
}

export const handleDOMContentLoaded = () => {
  const savedDarkMode = localStorage.getItem("darkMode")
  if (savedDarkMode === "true" || savedDarkMode === "false") {
    const prefersDark = savedDarkMode === "true"
    setUserPrefersDark(prefersDark) // Atualiza o estado com a preferência salva
    applyEffectiveTheme()
    hideThemeWarning()
  } else {
    setTimeout(() => {
      applyEffectiveTheme()
      const isDarkApplied = htmlElement.getAttribute("data-theme") === "dark"
      if (isDarkApplied !== getSystemPrefersDark()) {
        showThemeWarning()
      }
    }, 100)
  }
}
