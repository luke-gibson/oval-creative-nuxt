<script setup lang="ts">
  import type { ServiceCards } from '@/types/serviceCards'
  defineProps<ServiceCards>()
</script>

<template>
  <div class="flex justify-between flex-wrap items-start mb-12">
    <h2 class="text-white text-3xl md:text-6xl font-extrabold max-w-3xl">{{ title }}</h2>
    <ButtonsSecondaryButton v-if="hasCta" class="mt-6 flex" to="/services">Our Services<IconsRightIcon class="ml-2 w-5 inline-block"/></ButtonsSecondaryButton>  
  </div>
  <div>
    <CardComponent 
      v-for="service in services"
      :link="service.link"
      :title="service.title"
      :description="service.description"
     />
  </div>
</template>