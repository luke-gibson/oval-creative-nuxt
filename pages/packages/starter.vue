<script setup lang="ts">
import { ref } from 'vue'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'

useHead({
  title: 'Starter Package - £35/month | Oval Creative',
  meta: [
    {
      name: 'description',
      content: 'Get your business online with our Starter package. Up to 5 static pages, responsive design, SSL, hosting, and more for just £35/month.'
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  pages: '',
  timeline: '',
  message: ''
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
  // Check if hCaptcha is completed
  if (!hcaptchaToken.value) {
    hcaptchaError.value = true
    return
  }

  isSubmitting.value = true
  submitError.value = false

  try {
    const response = await fetch('https://formspree.io/f/mqebyavn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.value,
        package: 'Starter - £35/month',
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
        website: '',
        pages: '',
        timeline: '',
        message: ''
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

  <LayoutContainerComponent>
    <figure class="c-figure relative mb-14 md:mb-20">
      <NuxtPicture class="w-full h-[450px] md:h-[550px] overflow-hidden block rounded-2xl"
        src="https://mindful-excitement-773e4816a4.media.strapiapp.com/home_oval_creative_9eb5b3572a.jpg"
        alt="Starter Package" format="avif,webp, jpg" />
      <figcaption class="absolute bottom-2 left-3 right-3 md:bottom-6 md:left-8 md:right-6 max-w-lg md:max-w-3xl z-10">
        <div class="inline-block mb-4">
          <span class="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-bold">
            Perfect for Small Businesses
          </span>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Starter Package</h1>
        <p class="text-3xl md:text-4xl font-bold">£35 <span class="text-xl text-white">per
            month</span></p>
      </figcaption>
    </figure>
  </LayoutContainerComponent>

  <!-- Overview Section -->
  <section class="max-w-[1440px] mx-auto px-4 pb-14 md:pb-20">
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">What's Included</h2>
        <div class="space-y-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Up to 5 Static Pages</h3>
              <p class="text-gray-300">Perfect for essential pages like Home, About, Services, Contact, and a fifth page
                of your choice.</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Responsive Design</h3>
              <p class="text-gray-300">Your website will look stunning on all devices - desktop, tablet, and mobile.</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">SSL Certificate & Hosting</h3>
              <p class="text-gray-300">Secure HTTPS connection and reliable hosting included - no extra fees.</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Contact Form</h3>
              <p class="text-gray-300">Integrated contact form so customers can reach you directly from your website.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Basic SEO Setup</h3>
              <p class="text-gray-300">Essential SEO configuration to help local customers find you online.</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Content Generation</h3>
              <p class="text-gray-300">We'll help create professional copy for your website pages.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Perfect For</h2>
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10 mb-8">
          <ul class="space-y-4 text-gray-300">
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Small businesses just starting online</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Local services needing a professional presence</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Startups on a tight budget</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Businesses with straightforward service offerings</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Companies wanting a simple, effective online presence</span>
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-4">What You Get</h3>
          <div class="space-y-3 text-white">
            <p class="flex items-center">
              <svg class="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Professional website in 2-3 weeks
            </p>
            <p class="flex items-center">
              <svg class="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              No upfront costs
            </p>
            <p class="flex items-center">
              <svg class="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Cancel anytime
            </p>
            <p class="flex items-center">
              <svg class="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              Ongoing support & updates
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="max-w-[1440px] mx-auto px-4 pb-14 md:pb-20">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Get Started with Starter</h2>
        <p class="text-xl text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
      </div>

      <div v-if="submitSuccess" class="bg-secondary/20 border-2 border-secondary rounded-2xl p-8 text-center mb-8">
        <svg class="w-16 h-16 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-bold text-white mb-2">Thank you!</h3>
        <p class="text-gray-300 text-sm">We've received your enquiry and will be in touch soon.</p>
      </div>

      <form v-else @submit.prevent="handleSubmit"
        class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10">
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label for="name" class="block text-white font-semibold mb-2">Your Name *</label>
            <input v-model="form.name" type="text" id="name" required
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="John Smith" />
          </div>

          <div>
            <label for="email" class="block text-white font-semibold mb-2">Email Address *</label>
            <input v-model="form.email" type="email" id="email" required
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="john@example.com" />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label for="phone" class="block text-white font-semibold mb-2">Phone Number</label>
            <input v-model="form.phone" type="tel" id="phone"
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="07123 456789" />
          </div>

          <div>
            <label for="company" class="block text-white font-semibold mb-2">Company Name *</label>
            <input v-model="form.company" type="text" id="company" required
              class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              placeholder="Your Company Ltd" />
          </div>
        </div>

        <div class="mb-6">
          <label for="website" class="block text-white font-semibold mb-2">Current Website (if any)</label>
          <input v-model="form.website" type="url" id="website"
            class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
            placeholder="https://example.com" />
        </div>

        <div class="mb-6">
          <label for="pages" class="block text-white font-semibold mb-2">Which pages do you need? *</label>
          <textarea v-model="form.pages" id="pages" required rows="3"
            class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors resize-none"
            placeholder="e.g., Home, About Us, Services, Contact, Gallery"></textarea>
        </div>

        <div class="mb-6">
          <label for="timeline" class="block text-white font-semibold mb-2">When do you need your website?</label>
          <select v-model="form.timeline" id="timeline"
            class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:outline-none focus:border-secondary transition-colors">
            <option value="">Select a timeframe</option>
            <option value="asap">As soon as possible</option>
            <option value="1-2weeks">1-2 weeks</option>
            <option value="2-4weeks">2-4 weeks</option>
            <option value="1-2months">1-2 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="message" class="block text-white font-semibold mb-2">Additional Information</label>
          <textarea v-model="form.message" id="message" rows="5"
            class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors resize-none"
            placeholder="Tell us about your business, any specific requirements, or questions you have..."></textarea>
        </div>

        <!-- hCaptcha Widget -->
        <div class="mb-6">
          <VueHcaptcha :sitekey="hcaptchaSiteKey" @verify="onVerify" @expire="onExpire" theme="dark" />
          <p v-if="hcaptchaError" class="text-red-400 text-sm mt-2">Please complete the captcha verification</p>
        </div>

        <div v-if="submitError" class="mb-6 p-4 bg-red-500/20 border-2 border-red-500 rounded-xl">
          <p class="text-white text-sm">Something went wrong. Please try again or email us directly at
            letschat@ovalcreative.co.uk</p>
        </div>

        <button type="submit" :disabled="isSubmitting"
          class="w-full bg-secondary hover:bg-[#00f0b8] text-primary font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
          <span v-if="!isSubmitting">Send Enquiry</span>
          <span v-else>Sending...</span>
        </button>
      </form>
    </div>
  </section>

</template>
