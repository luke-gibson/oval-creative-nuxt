<script setup lang="ts">
  import type { Text } from '@/types/text'
  defineProps<Text>()
</script>

<template>  
  <LayoutContainerComponent
    class="text-white leading-8" 
    :class="[shortWidth ? 'md:pr-[20%]' : '', hasSpaceBottom ? 'pb-14 md:pb-20' : '', hasSpaceTop ? 'pt-14 md:pt-20' : '']"    
    >
    <RichTextBlocks v-if="Array.isArray(copy)" :data="copy"/>
    <ButtonsSecondaryButton v-if="hasCta" class="mt-6" :to="ctaLink">Find out who we are <IconsRightIcon v-if="ctaHasArrow" class="ml-2 w-5 inline-block"/></ButtonsSecondaryButton>  
  </LayoutContainerComponent>
</template>