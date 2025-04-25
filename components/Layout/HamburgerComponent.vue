<script setup lang="ts">
import { useMobileNav } from '@/composables/useMobileNav'

defineProps<{ isActive: boolean }>()

const { toggleNav } = useMobileNav()
</script>

<template>
  <div
    class="c-hamburger md:hidden"
    :class="{ 'is-active': isActive }"
    @click="toggleNav"
    data-hamburger
  >
    <span class="c-hamburger__line"></span>
    <span class="c-hamburger__line"></span>
    <span class="c-hamburger__line"></span>
  </div>
</template>

<style lang="scss" scoped>
.c-hamburger {
  $root: &;

  &__line {
    width: 32px;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
    display: block;
    margin: .4rem auto;
    transition: all 0.3s ease-in-out;

    &:nth-child(1){
      width: 50%;
    }

    &:nth-child(3){
      width: 75%;
    }
  }

  &:hover {
    cursor: pointer;
  }

  &.is-active {
    #{ $root } {
      &__line {
        background-color: #fff;

        &:nth-child(2) {
          opacity: 0;          
        }

        &:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
          width: 100%;
        }

        &:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
          width: 100%;
        }
      }
    }
  }
}
</style>