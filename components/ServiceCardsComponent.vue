<script setup lang="ts">
  import type { Services } from '@/types/services'
  defineProps<Services>()
</script>

<template>
  <LayoutContainerComponent :class="[hasSpaceBottom ? 'pb-14 md:pb-20' : '', hasSpaceTop ? 'pt-14 md:pt-20' : '']">
    <div class="flex justify-between flex-wrap items-start mb-12">
      <RichTextBlocks class="max-w-3xl" :data="content"/>
      <ButtonsSecondaryButton v-if="hasCta" class="mt-6 flex" :to="ctaLink">{{ ctaText }}<IconsRightIcon class="ml-2 w-5 inline-block"/></ButtonsSecondaryButton>  
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
      <CardComponent 
        v-for="service in service_lists"
        :link="service.slug"
        :title="service.name"
        :description="service.description"
      />
    </div>
  </LayoutContainerComponent>
</template>