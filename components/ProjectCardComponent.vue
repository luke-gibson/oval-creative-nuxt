<script lang="ts" setup>
import type { ProjectCard } from '@/types/projectCard'

const props = defineProps<ProjectCard & { index?: number }>()

const cardRef = ref<any>(null)
const isVisible = ref(false)

if (process.client) {
  onMounted(() => {
    // NuxtLink is a component, we need to get the actual DOM element
    const element = cardRef.value?.$el || cardRef.value
    if (!element) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
    
    observer.observe(element)
    
    onBeforeUnmount(() => {
      observer.disconnect()
    })
  })
}
</script>

<template>
<NuxtLink 
  v-if="slug && name && image?.formats?.medium?.url"
  ref="cardRef"
  :to="`/projects/${slug}`"    
  class="c-project-card group block relative overflow-hidden rounded-2xl"
  :class="{ 'is-visible': isVisible }"
  :style="{ '--animation-order': index || 0 }"
  :aria-label="`View ${name} project`"
>
  <!-- Background image with dark overlay -->
  <div class="absolute inset-0">
    <NuxtImg
      :src="image.formats.medium.url"
      :alt="image.alternativeText || name"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <!-- Subtle dark overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 group-hover:from-black/40 group-hover:to-black/30 transition-all duration-500"></div>
  </div>

  <!-- Content - always visible -->
  <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
    <div class="relative z-10">
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
        {{ name }}
      </h3>
      
      <p v-if="description" class="text-white/90 text-sm md:text-base mb-4 line-clamp-2 max-w-lg">
        {{ description }}
      </p>

      <!-- Proper button with arrow -->
      <div class="inline-flex items-center gap-3 px-6 py-3 bg-white group-hover:bg-secondary rounded-full transition-all duration-300">
        <span class="text-primary group-hover:text-white font-semibold text-sm md:text-base transition-colors duration-300">
          View project
        </span>
        <IconsRightIcon class="w-5 text-primary group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1"/>
      </div>
    </div>
  </div>
</NuxtLink>
</template>

<style lang="scss" scoped>
.c-project-card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  
  // Hidden by default
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  // Animate when scrolled into view with staggered delay
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--animation-order) * 0.1s);
  }
  
  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    transform: translateY(-4px) !important;
  }
}
</style>
