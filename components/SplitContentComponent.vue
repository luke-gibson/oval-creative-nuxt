<script lang="ts" setup>
  import type { Split } from '@/types/split';
  defineProps<Split>()
</script>

<template>
  <div class="c-split flex flex-wrap items-center pb-14 md:pb-20">
    <div 
      class="w-full md:w-1/2 text-xl md:text-2xl text-white leading-8"
      :class="invert ? 'order-2 md:pl-28' : 'md:pr-28'"
      >
      <p>{{ copy }}</p>
    </div>
    <NuxtPicture
      class="w-full md:w-1/2 rounded-2xl overflow-hidden mb-12 md:mb-0"
      :class="invert ? 'order-1' : ''"      
      :src="image.url"
      :alt="image.alt"/>
  </div>
</template>

<style lang="scss">
  .c-split {
    picture img {
      width: 100%;
    }
  }
</style>