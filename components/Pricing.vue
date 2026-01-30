<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface PricingTier {
  name: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  cta: string,
  link: string,
  highlighted?: boolean,
}

const scrollContainer = ref(null)
const currentIndex = ref(0)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '£35',
    period: 'per month',
    description: 'Perfect for small businesses getting online',
    features: [
      'Up to 5 static pages',
      'Responsive design',
      'SSL certificate included',
      'Hosting included',
      'Contact form',
      'Basic SEO setup and content generation',
    ],
    cta: 'Get Started',
    link: '/packages/starter'
  },
  {
    name: 'Professional',
    price: '£75',
    period: 'per month',
    description: 'Ideal for established growing businesses',
    features: [
      'Unlimited pages',
      'CMS integration (Strapi)',
      'Content management training',
      'News functionality',
      'Analytics setup',
      'Priority support'
    ],
    cta: 'Get Started',
    link: '/packages/professional',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '£150',
    period: 'per month',
    description: 'Complete package with ongoing organic SEO',
    features: [
      'Everything in Professional',
      'Monthly SEO updates',
      'Keyword research & optimisation',
      'Performance monitoring',
      'Monthly reporting',
      'Content recommendations',
    ],
    cta: 'Get Started',
    link: '/packages/enterprise',
  },
  {
    name: 'Custom',
    price: 'Let\'s chat',
    period: '',
    description: 'Bespoke solutions for unique requirements',
    features: [
      'Tailored to your needs',
      'Complex integrations',
      'E-commerce capabilities',
      'Custom functionality and design',
      'API development',
      'Dedicated support'
    ],
    cta: 'Get started',
    link: '/packages/custom',
  }
]

const updateCurrentIndex = () => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  const containerRect = container.getBoundingClientRect()
  const cards = container.querySelectorAll('.pricing-card')
  
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
  canScrollLeft.value = currentIndex.value > 0
  canScrollRight.value = currentIndex.value < pricingTiers.length - 1
}

const scrollLeft = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    scrollToIndex(currentIndex.value)
  }
}

const scrollRight = () => {
  if (currentIndex.value < pricingTiers.length - 1) {
    currentIndex.value++
    scrollToIndex(currentIndex.value)
  }
}

const scrollToIndex = (index) => {
  if (!scrollContainer.value) return
  const cards = scrollContainer.value.querySelectorAll('.pricing-card')
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
  <section class="bg-primary overflow-x-hidden pb-14 md:pb-20">
    <LayoutContainerComponent>
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">Simple, transparent pricing</h2>
        <p class="text-xl text-gray-300 mb-2">No upfront costs. Cancel anytime.</p>
        <p class="text-lg text-gray-400">All plans include hosting, SSL, and ongoing support</p>
      </div>

      <div class="-mx-6 xl:mx-0">
        <div
          ref="scrollContainer"
          class="flex xl:grid xl:grid-cols-4 gap-6 xl:gap-6 overflow-x-auto snap-x snap-mandatory xl:overflow-x-visible scrollbar-hide px-6 xl:px-0 pt-6 xl:pt-0">
          <div
            v-for="tier in pricingTiers"
            :key="tier.name"
            :class="[
              'pricing-card snap-center flex-shrink-0 w-[85vw] md:w-[50vw] xl:w-auto',
              'rounded-3xl p-6 md:p-8 transition-all backdrop-blur-sm relative',
              tier.highlighted 
                ? 'bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary' 
                : 'bg-white/5 border-2 border-white/10'
            ]"
          >
            <div v-if="tier.highlighted" class="absolute -top-3.5 left-8 transform z-10">
              <span class="bg-secondary text-primary px-4 py-1 rounded-full text-md font-bold whitespace-nowrap">
                Most Popular
              </span>
            </div>

            <div class="mb-6">
              <h3 class="text-2xl md:text-3xl font-bold mb-2 text-white">{{ tier.name }}</h3>
              <p class="text-gray-400 text-sm md:text-base mb-4">{{ tier.description }}</p>
              <div class="mb-2">
                <span class="text-4xl md:text-5xl font-bold text-white">{{ tier.price }}</span>
                <span v-if="tier.period" class="text-gray-400 ml-2 text-base md:text-lg">{{ tier.period }}</span>
              </div>
            </div>

            <ul class="space-y-3 mb-6">
              <li v-for="feature in tier.features" :key="feature" class="flex items-start">
                <svg class="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-300 text-sm md:text-base">{{ feature }}</span>
              </li>
            </ul>

            <NuxtLink
              :to=tier.link
              :class="[
                'block w-full py-3 px-6 rounded-xl font-bold transition-all text-center text-base md:text-lg',
                tier.highlighted
                  ? 'bg-secondary text-primary hover:bg-[#00f0b8] hover:scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              ]"
            >
              {{ tier.cta }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-4 mt-8 xl:hidden">
        <button 
          @click="scrollLeft"
          :disabled="!canScrollLeft"
          class="p-3 rounded-full bg-white/10 border-2 border-white/20 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20"
          aria-label="Scroll left"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="scrollRight"
          :disabled="!canScrollRight"
          class="p-3 rounded-full bg-white/10 border-2 border-white/20 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20"
          aria-label="Scroll right"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </LayoutContainerComponent>
  </section>
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
