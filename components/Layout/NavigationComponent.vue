<script setup lang="ts">
  const route = useRoute()
  defineProps<{ isOpen?: boolean }>()
</script>

<template>
  <nav class="c-nav" :class="{ 'open-nav': isOpen, 'close-nav': !isOpen }">
    <ul class="c-nav__list flex">
      <li class="c-nav__item">
        <NuxtLink 
          class="c-nav__link text-white font-bold md:mr-6" 
          :class="{ active: route.path === '/' }"
          to="/"
          >
          home</NuxtLink>
      </li>
      <li class="c-nav__item">
        <NuxtLink class="c-nav__link text-white font-bold md:mr-6" :class="{ active: route.path === '/about' }"
        to="/about">about</NuxtLink>
      </li>
      <li class="c-nav__item">
        <NuxtLink class="c-nav__link text-white font-bold md:mr-6" :class="{ active: route.path.startsWith('/projects') }"
        to="/projects">projects</NuxtLink>
      </li>
      <li class="c-nav__item">
        <NuxtLink class="c-nav__link text-white font-bold" :class="{ active: route.path.startsWith('/services') }"
        to="/services">services</NuxtLink>
      </li>
      <li class="c-nav__item">
        <ButtonsSecondaryButton class="c-nav__button block md:hidden" to="/contact">get started
          <IconsSpeech class="w-5 inline ml-2" />
        </ButtonsSecondaryButton>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-40px);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
  }
}

@media screen and (max-width: 768px) {
  .c-nav {
    $root: &;
    background-color: theme('colors.primary');
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100dvh;
    z-index: 50;

    &__list {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    &__item {
      margin-bottom: 2.5rem;
      opacity: 0;
      transform: translateX(-40px);
      pointer-events: none;
      transition: transform 0.3s, opacity 0.3s;
    }

    &__button {
      opacity: 0;
      transform: translateY(30px);
      pointer-events: none;
      transition: transform 0.3s, opacity 0.3s;
    }

    &__item:not(:has(.c-nav__button)) {
      font-size: 1.5rem;
    }

    &.open-nav {
      #{$root}__item {
        animation: fadeInLeft 0.6s ease-in-out forwards;
      }

      #{$root} {
        &__item {
          &:nth-child(1) { animation-delay: 0.4s; }
          &:nth-child(2) { animation-delay: 0.6s; }
          &:nth-child(3) { animation-delay: 0.8s; }
          &:nth-child(4) { animation-delay: 1s; }

          &:last-child .c-nav__button {
            animation: fadeInUp 0.8s ease-in-out forwards;
            animation-delay: 1.4s;
          }
        }
      }

      .c-nav__item,
      .c-nav__button {
        pointer-events: auto;
      }
    }

    &.close-nav {
      #{$root}__item {
        animation: fadeOutLeft 0.6s ease-in-out forwards;
      }

      #{$root} {
        &__item {
          &:nth-child(1) { animation-delay: 0.4s; }
          &:nth-child(2) { animation-delay: 0.6s; }
          &:nth-child(3) { animation-delay: 0.8s; }
          &:nth-child(4) { animation-delay: 1s; }

          &:last-child .c-nav__button {
            animation: fadeOutUp 0.6s ease-in-out forwards;
            animation-delay: 1.4s;
          }
        }
      }

      .c-nav__item,
      .c-nav__button {
        pointer-events: none;
      }
    }

    &__link {
      display: block;
    }
  }
}
</style>
