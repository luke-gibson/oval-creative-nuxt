<script setup lang="ts">
import { ref } from 'vue'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'
import type { ContactData } from '~/types/contact'

const config = useRuntimeConfig()
const route = useRoute()

const { data } = await useAsyncData<ContactData>('contact', () =>
  $fetch(`${config.public.strapiUrl}/api/contact?pLevel`)
)

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}${route.fullPath}`,
    },
  ],
})

useSeoMeta({
  title: data.value?.data.title || 'Default Title',
  ogTitle: data.value?.data.title || 'Default Title',
  description: data.value?.data.description || 'Default description',
  ogDescription: data.value?.data.description || 'Default description',
  ogImage: data.value?.data.image?.formats?.large?.url || data.value?.data.image?.url || 'https://example.com/default-image.png',
  twitterCard: 'summary_large_image',
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  subject: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)
const hcaptchaToken = ref('')
const hcaptchaError = ref(false)

const hcaptchaSiteKey = '6cf2670e-e2ce-4a62-a33c-201cd7384d1a'

const onVerify = (token) => {
  hcaptchaToken.value = token
  hcaptchaError.value = false
}

const onExpire = () => {
  hcaptchaToken.value = ''
}

const handleSubmit = async () => {
  if (!hcaptchaToken.value) {
    hcaptchaError.value = true
    return
  }

  isSubmitting.value = true
  submitError.value = false

  try {
    const response = await fetch('https://formspree.io/f/xdazdayr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...form.value,
        'h-captcha-response': hcaptchaToken.value
      })
    })

    if (response.ok) {
      submitSuccess.value = true
      form.value = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        subject: ''
      }
      hcaptchaToken.value = ''
    } else {
      submitError.value = true
    }
  } catch (error) {
    submitError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <DynamicContent v-if="data" :content="data.data.content" />

  <!-- Contact Form Section -->
  <section class="max-w-[1440px] mx-auto px-4 md:px-6 pb-14 md:pb-20 overflow-hidden">
    <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      <!-- Left side - Info cards -->
      <div class="space-y-6 w-full">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/10 hover:border-secondary/50 transition-all">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-white font-bold text-xl mb-2">Phone</h3>
              <a href="tel:07513822562" class="text-gray-300 hover:text-secondary transition-colors text-lg">07513 822 562</a>
            </div>
          </div>
        </div>

        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/10 hover:border-secondary/50 transition-all">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-white font-bold text-xl mb-2">Email</h3>
              <a href="mailto:letschat@ovalcreative.co.uk" class="text-gray-300 hover:text-secondary transition-colors text-lg break-all">letschat@ovalcreative.co.uk</a>
            </div>
          </div>
        </div>

        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/10 hover:border-secondary/50 transition-all">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-white font-bold text-xl mb-2">Location</h3>
              <p class="text-gray-300 text-lg">Portsmouth, UK</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary rounded-2xl p-6 md:p-8">
          <h3 class="text-white font-bold text-xl mb-3">Response Time</h3>
          <p class="text-gray-300">We typically respond within <span class="text-secondary font-bold">24 hours</span> during business days.</p>
        </div>
      </div>

      <!-- Right side - Form -->
      <div class="w-full">
        <div v-if="submitSuccess" class="bg-secondary/20 border-2 border-secondary rounded-2xl p-6 md:p-8 text-center">
          <svg class="w-16 h-16 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-2xl font-bold text-white mb-2">Thank you!</h3>
          <p class="text-gray-300">We've received your message and will be in touch soon.</p>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/10 w-full">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Send us a message</h2>
          
          <div class="mb-6">
            <label for="name" class="block text-white font-semibold mb-2">Your Name *</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="John Smith"
            />
          </div>

          <div class="mb-6">
            <label for="email" class="block text-white font-semibold mb-2">Email Address *</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div class="mb-6">
            <label for="phone" class="block text-white font-semibold mb-2">Phone Number</label>
            <input
              v-model="form.phone"
              type="tel"
              id="phone"
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="07123 456789"
            />
          </div>

          <div class="mb-6">
            <label for="company" class="block text-white font-semibold mb-2">Company Name</label>
            <input
              v-model="form.company"
              type="text"
              id="company"
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="Your Company Ltd"
            />
          </div>

          <div class="mb-6">
            <label for="subject" class="block text-white font-semibold mb-2">Subject *</label>
            <input
              v-model="form.subject"
              type="text"
              id="subject"
              required
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="What is your enquiry about?"
            />
          </div>

          <div class="mb-6">
            <label for="message" class="block text-white font-semibold mb-2">Your Message *</label>
            <textarea
              v-model="form.message"
              id="message"
              required
              rows="5"
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors resize-none"
              placeholder="Tell us about your project or enquiry..."
            ></textarea>
          </div>

          <div class="mb-6">
            <VueHcaptcha
              :sitekey="hcaptchaSiteKey"
              @verify="onVerify"
              @expire="onExpire"
              theme="dark"
            />
            <p v-if="hcaptchaError" class="text-red-400 text-sm mt-2">Please complete the captcha verification</p>
          </div>

          <div v-if="submitError" class="mb-6 p-4 bg-red-500/20 border-2 border-red-500 rounded-xl">
            <p class="text-white">Something went wrong. Please try again or email us directly.</p>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-secondary hover:bg-[#00f0b8] text-primary font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
