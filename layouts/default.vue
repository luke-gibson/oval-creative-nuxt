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
  color: #fff;
}

body.is-locked {
  overflow: hidden;
  height: 100vh;
  position: fixed;
  width: 100%;
}

h1, h2, h3, h4, h5, h6,
p {
  margin: 0;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
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
}
@media (min-width: 768px) {
  h3 {
    font-size: 3rem;
  }
}

h4 {
  font-size: 1.75rem;
  font-weight: 600;
}
@media (min-width: 768px) {
  h4 {
    font-size: 2.25rem;
  }
}

h5 {
  font-size: 1.5rem;
  font-weight: 500;
}
@media (min-width: 768px) {
  h5 {
    font-size: 2rem;
  }
}

h6 {
  font-size: 1.25rem;
  font-weight: 500;
}
@media (min-width: 768px) {
  h6 {
    font-size: 1.75rem;
  }
}

p {
  font-size: 1.25rem;
  line-height: 1.6;

  a {
    transition: color ease-in-out 0.1s;
    &:hover,
    &:focus {
      @apply text-secondary;
    }
  }
}
@media (min-width: 768px) {
  p {
    font-size: 1.5rem;
    line-height: 1.35;
  }
}

// Margin between heading and paragraph
h1 + p,
h2 + p,
h3 + p,
h4 + p,
h5 + p,
h6 + p {
  margin-top: 1.5rem;
}

// Margin between paragraphs
p + p {
  margin-top: 1.25rem;
}

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