<template>
  <LayoutHeaderComponent/>
  <main class="bg-primary rounded-b-3xl pb-4 border-b-8 border-secondary pt-32">
    <slot />
  </main>
  <LayoutFooterComponent/>
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