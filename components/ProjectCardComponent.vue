<script lang="ts" setup>
  import type { ProjectCard } from '@/types/projectCard'
  defineProps<ProjectCard>()
</script>

<template>
<NuxtLink 
  :to="`projects/${slug}`"    
  class="group bg-[#3e4555] bg-opacity-60 rounded-2xl text-white border-b-8 border-secondary overflow-hidden flex flex-col"
  :aria-label="`link to ${name}`"
>
  <NuxtImg 
    class="w-full"
    :src="image.formats.medium.url"
    :alt="image.alternativeText"
  />
  <div class="p-4 pb-16 md:pt-6 md:pb-20 md:px-8 relative flex-1">
    <h4>{{ name }}</h4>
    <p>{{ description }}</p>
    <p class="text-secondary md:text-white md:group-hover:text-secondary transition-all absolute bottom-4 md:bottom-6 left-4 md:left-8 flex items-center">
      <strong>read more</strong>
      <IconsRightIcon 
        class="w-6 ml-3 inline transform transition-transform duration-200 group-hover:translate-x-2"
      />
    </p>
  </div>
</NuxtLink>
</template>