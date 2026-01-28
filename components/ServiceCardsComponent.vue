<script setup lang="ts">
import { ref } from 'vue'
import type { Services } from '@/types/services'

defineProps<Services>()

const scrollContainer = ref(null)

const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
}
</script>

<template>
  <LayoutContainerComponent class="overflow-x-hidden" :class="[hasSpaceBottom ? 'pb-14 md:pb-20' : '', hasSpaceTop ? 'pt-14 md:pt-20' : '']">
    <div class="flex justify-between flex-wrap items-start mb-12">
      <RichTextBlocks class="max-w-3xl" :data="content" />
      <ButtonsSecondaryButton v-if="hasCta" class="mt-6 flex" :to="ctaLink">{{ ctaText }}
        <IconsRightIcon class="ml-2 w-5 inline-block" />
      </ButtonsSecondaryButton>
    </div>
    <div
  ref="scrollContainer"
  class="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory md:overflow-x-visible scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
  <CardComponent v-for="service in service_lists" :link="service.slug" :title="service.name"
    :description="service.description" class="snap-center flex-shrink-0 w-[75vw] md:w-auto" />
</div>
    
    <div class="flex justify-end gap-4 mt-6 md:hidden">
      <button 
        @click="scrollLeft"
        class="p-2 rounded-full border-solid border-2 transition-colors"
        aria-label="Scroll left"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        @click="scrollRight"
        class="p-2 rounded-full border-solid border-2 transition-colors"
        aria-label="Scroll right"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </LayoutContainerComponent>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
