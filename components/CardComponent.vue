<script setup lang="ts">
  import type { Card } from '@/types/card'
  defineProps<Card>()
</script>

<template>
  <NuxtLink 
    :to="`services/${link}`"
    :title="title"
    :description="description"
    class="group bg-[#3e4555] bg-opacity-60 rounded-2xl pt-8 pr-16 md:pr-24 pb-8 pl-8 text-white border-t-8 border-secondary relative"
    :aria-label="`link to ${title}`"
    >
    <h3 class="text-3xl font-bold">{{ title }}</h3>    
    <p class="text-lg md:text-xl text-white">{{ description }}</p>
    <button class="bg-secondary absolute bottom-5 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group-hover:right-4 group-focus:right-4">
      <IconsRightIcon class="w-8"/>
    </button>
  </NuxtLink>
</template>