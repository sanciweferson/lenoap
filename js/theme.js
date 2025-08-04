// js/theme.js

export const htmlElement = document.documentElement
export const warningBanner = document.getElementById("theme-warning")
export const themeDesktopButton = document.getElementById("toggleDesktop")
export const toggleMobileButton = document.getElementById("toggle-mobile")
export const iconMoons = document.querySelectorAll(".icon-moon")
export const iconSuns = document.querySelectorAll(".icon-sun")

export let userPrefersDark = null

export const setUserPrefersDark = (value) => {
  userPrefersDark = value
}

export const updateTheme = (isDark) => {
  htmlElement.setAttribute("data-theme", isDark ? "dark" : "light")

  iconMoons.forEach((el) => el.classList.toggle("hidden", isDark))
  iconSuns.forEach((el) => el.classList.toggle("hidden", !isDark))

  const ariaLabel = isDark
    ? "Alternar para tema claro"
    : "Alternar para tema escuro"

  if (themeDesktopButton)
    themeDesktopButton.setAttribute("aria-label", ariaLabel)
  if (toggleMobileButton)
    toggleMobileButton.setAttribute("aria-label", ariaLabel)
}

export const getSystemPrefersDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches

export const applyEffectiveTheme = () => {
  const isDark =
    userPrefersDark !== null ? userPrefersDark : getSystemPrefersDark()
  updateTheme(isDark)
}

export const toggleTheme = () => {
  const currentTheme = htmlElement.getAttribute("data-theme")
  const isDark = currentTheme === "light"
  setUserPrefersDark(isDark)
  localStorage.setItem("darkMode", isDark.toString())
  applyEffectiveTheme()
  hideThemeWarning()
}

export const showThemeWarning = () => {
  if (warningBanner) warningBanner.style.display = "block"
}

export const hideThemeWarning = () => {
  if (warningBanner) warningBanner.style.display = "none"
}
