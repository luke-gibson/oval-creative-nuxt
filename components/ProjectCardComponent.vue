<script lang="ts" setup>
  import type { ProjectCard } from '@/types/projectCard'
  defineProps<ProjectCard>()
</script>

<template>
<NuxtLink 
v-if="slug && name && image?.formats?.medium?.url"
  :to="`/projects/${slug}`"    
  class="c-project-card group bg-[#3e4555] bg-opacity-60 rounded-2xl text-white overflow-hidden  relative h-[290px]"
  :aria-label="`link to ${name}`"
>
  <figure class="h-full">
    <NuxtImg
      v-if="image?.formats?.medium?.url"
      class="w-full h-full object-cover group-hover:scale-125 transition-all"
      :src="image.formats.medium.url"
      :alt="image.alternativeText || name"
    />
    <figcaption class="absolute bottom-3 left-3 z-10">    
      <h4>{{ name }}</h4>    
      <span class="mt-4 flex items-center text-lg bg-secondary group-hover:bg-white text-white group-hover:text-primary group-over:text-primary transition-all rounded-xl px-6 pt-[7px] pb-2 inline-block font-medium">
        {{ name }} project<IconsRightIcon class="w-6 ml-4 transition-all"/>
      </span>
    </figcaption>
  </figure>
</NuxtLink>
</template>

<style lang="scss">
.c-project-card {
  display: block;

  &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 1rem;
      z-index: 1;
  }
}
</style>