<script setup lang="ts">
  import type { Card } from '@/types/card'
  defineProps<Card>()
</script>

<template>
  <NuxtLink 
    :to="`/services/${link}`"
    :title="title"
    :description="description"
    class="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-white border-2 border-white/10 relative transition-all hover:border-secondary/50 hover:bg-white/10"
    :aria-label="`${title} ${description}`"
    >
    <div class="mb-20">
      <h3 class="text-2xl md:text-3xl font-bold mb-3">{{ title }}</h3>    
      <p class="text-base md:text-lg text-gray-300 leading-relaxed">{{ description }}</p>
    </div>
    <div 
      class="absolute bottom-6 left-8 right-8 flex items-center justify-between"
      >
      <span class="text-secondary font-bold text-lg">Learn more</span>
      <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-transform group-hover:scale-110">
        <IconsRightIcon class="w-5 text-primary"/>
      </div>
    </div>
  </NuxtLink>
</template>
