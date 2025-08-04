export const MOBILE_BREAKPOINT = 768

export const getMenuToggleButton = () => document.getElementById("menu-toggle")
export const getSideMenu = () => document.getElementById("side-menu")

export const openSideMenu = () => {
  const sideMenu = getSideMenu()
  const menuToggleButton = getMenuToggleButton()
  if (!sideMenu || !menuToggleButton) return

  sideMenu.classList.add("open")
  menuToggleButton.innerHTML = "&times;"
  menuToggleButton.setAttribute("aria-expanded", "true")
  sideMenu.setAttribute("aria-hidden", "false")
  localStorage.setItem("menuOpen", "true")
}

export const closeSideMenu = () => {
  const sideMenu = getSideMenu()
  const menuToggleButton = getMenuToggleButton()
  if (!sideMenu || !menuToggleButton) return

  sideMenu.classList.remove("open")
  menuToggleButton.innerHTML = "&#9776;"
  menuToggleButton.setAttribute("aria-expanded", "false")
  sideMenu.setAttribute("aria-hidden", "true")
  localStorage.setItem("menuOpen", "false")
}
