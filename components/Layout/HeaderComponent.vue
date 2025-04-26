<script setup lang="ts">
  import { useMobileNav } from '@/composables/useMobileNav'

  const { isMobileNavOpen, closeNav } = useMobileNav()
  const route = useRoute()

  watch(() => route.fullPath, () => {
    closeNav()
  })

  watch(isMobileNavOpen, (val) => {
    if (val) {
      document.body.classList.add('is-locked')
    } else {
      document.body.classList.remove('is-locked')
    }
  });
</script>

<template>
<header class="fixed top-0 left-0 right-0 max-w-[1440px] mx-auto">  
  <div class="bg-white bg-opacity-20 backdrop-blur-md flex justify-between items-center py-3 px-4 rounded-xl mx-4 mt-5 md:mt-8 relative  z-30">
    <NuxtLink to="/" aria-label="oval creative logo and link to home page">
      <IconsLogo class="w-32 md:w-42"/>
    </NuxtLink>
    <LayoutNavigationComponent class="hidden md:block" />
    <ButtonsSecondaryButton class="hidden md:block" to="/contact">
      get started <IconsSpeech class="w-5 inline ml-2"/>
    </ButtonsSecondaryButton>
    <LayoutHamburgerComponent :isActive="isMobileNavOpen" />
  </div> 

  <div
    class="absolute top-0 left-0 right-0 w-full h-full md:hidden transition-opacity duration-700 ease-in-out z-20"
    :class="[
      isMobileNavOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    ]">
    <LayoutNavigationComponent :isOpen="isMobileNavOpen" />
  </div>
</header>
</template>
