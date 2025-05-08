<script setup lang="ts">
  import type { Text } from '@/types/text'
  defineProps<Text>()
</script>

<template>  
  <div 
    class="text-xl md:text-2xl text-white leading-8" 
    :class="[shortWidth ? 'md:pr-[20%]' : '', hasSpaceBottom ? 'pb-14 md:pb-20' : '', hasSpaceTop ? 'pt-14 md:pt-20' : '']"    
    >
    <p>{{ copy }}</p>
    <ButtonsSecondaryButton v-if="hasCta" class="mt-6" :to="ctaLink">Find out who we are <IconsRightIcon v-if="ctaHasArrow" class="ml-2 w-5 inline-block"/></ButtonsSecondaryButton>  
  </div>
</template>