<script setup lang="ts">
  import type { Card } from '@/types/card'
  defineProps<Card>()
</script>

<template>
  <NuxtLink 
    :to="`/services/${link}`"
    :title="title"
    :description="description"
    class="group bg-[#3e4555] bg-opacity-60 rounded-2xl pt-8 pr-16 md:pr-24 pb-8 pl-8 text-white border-t-8 border-secondary relative"
    :aria-label="`${title} ${description}`"
    >
    <div>
      <h3 class="text-3xl font-bold">{{ title }}</h3>    
      <p class="text-lg md:text-xl text-white pb-16">{{ description }}</p>
  </div>
    <button 
      class="bg-secondary absolute bottom-5 px-6 font-bold h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
      :aria-label="`link to ${title}`"
      >Learn more 
      <IconsRightIcon class="w-8 ml-4"/>
    </button>
  </NuxtLink>
</template>
