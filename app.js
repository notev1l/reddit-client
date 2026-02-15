console.log('global')

const sidebar = document.querySelector('.sidebar')
const sidebarBtnNames = document.querySelectorAll('.sidebar-btn-name')
const switchBtn = document.querySelector('.switch-btn')
const sidebarSwitchText = document.querySelector('.switch-btn-text')
const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn')
const toggleSidebarIcon = document.querySelector('.toggle-sidebar-icon')

function switchTheme() {
  if (theme) {
    document.documentElement.style.setProperty('--primary-color', '#202B2D')
    document.documentElement.style.setProperty('--text-color', '#c1121f')
  } else {
    document.documentElement.style.setProperty('--primary-color', '#EDA398')
    document.documentElement.style.setProperty('--text-color', '#c1121f')
  }
  sidebarSwitchText.textContent = `Appearence: ${theme ? 'dark' : 'white'} theme`
  theme = !theme
}
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
document.onload = switchTheme()
switchBtn.addEventListener('click', () => switchTheme())

function toggleSidebar() {
  [...sidebarBtnNames].map((e) => e.classList.toggle('showNames'))
  sidebar.classList.toggle('toggleSidebar')
  toggleSidebarIcon.classList.toggle('rotate180')
}
toggleSidebarBtn.addEventListener('click', () => toggleSidebar())
