<script lang="ts" setup>
  import type { Split } from '@/types/split';
  defineProps<Split>()
</script>

<template>
  <div class="c-split flex flex-wrap items-center pb-14 md:pb-20">
    <NuxtPicture
      class="w-full md:w-1/2 rounded-2xl overflow-hidden"
      :class="invert ? 'md:order-2' : ''"      
      :src="image.url"
      :alt="image.alt"/>
    <div 
      class="w-full md:w-1/2 text-xl md:text-2xl text-white leading-8 mt-12 md:mt-0 "
      :class="invert ? 'md:order-1 md:pr-28' : 'md:pl-28'"
      >
      <p>{{ copy }}</p>
    </div>
    
  </div>
</template>

<style lang="scss">
  .c-split {
    picture img {
      width: 100%;
    }
  }
</style>