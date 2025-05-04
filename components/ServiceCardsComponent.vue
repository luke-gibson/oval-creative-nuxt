<script setup lang="ts">
  import type { Services } from '@/types/services'
  defineProps<Services>()
</script>

<template>
  <div class="flex justify-between flex-wrap items-start mb-12">
    <h2 class="text-white text-3xl md:text-6xl font-extrabold max-w-3xl">{{ title }}</h2>
    <ButtonsSecondaryButton v-if="hasCta" class="mt-6 flex" to="/services">Our Services<IconsRightIcon class="ml-2 w-5 inline-block"/></ButtonsSecondaryButton>  
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
    <CardComponent 
      v-for="service in serviceList"
      :link="service.link"
      :title="service.title"
      :description="service.description"
     />
</div>
</template>