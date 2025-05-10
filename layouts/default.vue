<template>
  <LayoutHeaderComponent />
  <main class="bg-primary rounded-b-3xl pb-4 border-b-8 border-secondary pt-28 md:pt-32">
    <slot />
  </main>
  <LayoutFooterComponent />
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

/* Base font and colour setup */
html {
  font-family: "Montserrat Alternates", sans-serif;
  color: #fff;
}

/* Headings */

h1 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4.5rem;
  }
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  h2 {
    font-size: 3.75rem;
  }
}

h3 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1.25rem;
}

@media (min-width: 768px) {
  h3 {
    font-size: 3rem;
  }
}

h4 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

@media (min-width: 768px) {
  h4 {
    font-size: 2.25rem;
  }
}

h5 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  h5 {
    font-size: 2rem;
  }
}

h6 {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  h6 {
    font-size: 1.75rem;
  }
}

p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-top: 1.5rem;

  &:first-of-type {
    margin-top: 0;
  }
}

@media (min-width: 768px) {
  p {
    font-size: 1.5rem;
    line-height: 1.75;
  }
}

/* Paragraph spacing between siblings */
p+p {
  margin-top: 1.25rem;
}

/* Small text */
small {
  font-size: 1rem;
  line-height: 1.5;
}

@media (min-width: 768px) {
  small {
    font-size: 1.125rem;
  }
}
</style>