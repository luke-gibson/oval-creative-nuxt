<template>
  <!-- <LayoutHeaderComponent/> -->
  <main class="bg-primary">
    <slot />
  </main>
  <!-- <LayoutFooterComponent/> -->
</template>

<style lang="scss">
  html {
    font-family: "Montserrat Alternates", sans-serif;
  }
  body.is-locked {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    width: 100%;
}
</style> 