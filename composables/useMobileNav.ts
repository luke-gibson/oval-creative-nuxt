
const isMobileNavOpen = ref(false)
let scrollY = 0

export function useMobileNav() {
  function toggleNav() {
    isMobileNavOpen.value = !isMobileNavOpen.value

    if (isMobileNavOpen.value) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }

  function closeNav() {
    if (isMobileNavOpen.value) {
      isMobileNavOpen.value = false
      unlockScroll()
    }
  }

  function lockScroll() {
    scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.classList.add('is-locked')
  }

  function unlockScroll() {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.classList.remove('is-locked')
    window.scrollTo({ top: scrollY })
  }

  return {
    isMobileNavOpen,
    toggleNav,
    closeNav
  }
}