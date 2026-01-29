<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Services } from '@/types/services'

const props = defineProps<Services>()

const scrollContainer = ref(null)
const currentIndex = ref(0)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const updateCurrentIndex = () => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  const containerRect = container.getBoundingClientRect()
  const cards = container.querySelectorAll('.snap-center')
  
  // Find which card is currently most visible
  let closestIndex = 0
  let closestDistance = Infinity
  
  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect()
    const distance = Math.abs(cardRect.left - containerRect.left)
    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })
  
  currentIndex.value = closestIndex
  updateScrollButtons()
}

const updateScrollButtons = () => {
  const totalCards = props.service_lists?.length || 0
  canScrollLeft.value = currentIndex.value > 0
  canScrollRight.value = currentIndex.value < totalCards - 1
}

const scrollLeft = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    scrollToIndex(currentIndex.value)
  }
}

const scrollRight = () => {
  const totalCards = props.service_lists?.length || 0
  if (currentIndex.value < totalCards - 1) {
    currentIndex.value++
    scrollToIndex(currentIndex.value)
  }
}

const scrollToIndex = (index) => {
  if (!scrollContainer.value) return
  const cards = scrollContainer.value.querySelectorAll('.snap-center')
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', updateCurrentIndex)
    updateCurrentIndex()
  }
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', updateCurrentIndex)
  }
})
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
      <CardComponent v-for="service in service_lists" :key="service.slug" :link="service.slug" :title="service.name"
        :description="service.description" class="snap-center flex-shrink-0 w-[75vw] md:w-auto" />
    </div>
    
    <div class="flex justify-end gap-4 mt-6 md:hidden">
      <button 
        @click="scrollLeft"
        :disabled="!canScrollLeft"
        class="p-3 rounded-full bg-white/10 border-2 border-white/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20"
        aria-label="Scroll left"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        @click="scrollRight"
        :disabled="!canScrollRight"
        class="p-3 rounded-full bg-white/10 border-2 border-white/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20"
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
