<script setup lang="ts">
import { ref } from 'vue'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'

useHead({
  title: 'Custom Package - Bespoke Solutions | Oval Creative',
  meta: [
    {
      name: 'description',
      content: 'Bespoke web solutions tailored to your unique requirements. E-commerce, custom functionality, API development, and dedicated support.'
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  projectType: '',
  features: [],
  budget: '',
  timeline: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)
const hcaptchaToken = ref('')
const hcaptchaError = ref(false)

const hcaptchaSiteKey = '6cf2670e-e2ce-4a62-a33c-201cd7384d1a'

const featureOptions = [
  'E-commerce functionality',
  'Custom user authentication',
  'API integrations',
  'Database design',
  'Custom admin panel',
  'Payment processing',
  'Third-party integrations',
  'Mobile app',
  'Other (please specify)'
]

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
    const response = await fetch('https://formspree.io/f/mgoynopb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.value,
        package: 'Custom - Bespoke Solution',
        features: form.value.features.join(', '),
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
        projectType: '',
        features: [],
        budget: '',
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
            Bespoke Solutions
          </span>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Custom Package</h1>
        <p class="text-3xl md:text-4xl font-bold text-white">Let's chat about your unique needs</p>
      </figcaption>
    </figure>
  </LayoutContainerComponent>

  <!-- Overview Section -->
  <section class="max-w-[1440px] mx-auto px-4 pb-14 md:pb-20">
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">What We Can Build</h2>
        <div class="space-y-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">E-commerce Platforms</h3>
              <p class="text-gray-300">Full-featured online stores with payment processing, inventory management, and
                order fulfillment.</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Custom Web Applications</h3>
              <p class="text-gray-300">Bespoke tools and platforms built exactly to your specifications and workflows.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">API Development & Integration</h3>
              <p class="text-gray-300">Connect your systems, automate workflows, and build custom APIs for your business
                needs.</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Database Design</h3>
              <p class="text-gray-300">Robust, scalable database architecture that grows with your business.</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Custom Admin Panels</h3>
              <p class="text-gray-300">Powerful dashboards and admin interfaces tailored to your team's needs.</p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Third-Party Integrations</h3>
              <p class="text-gray-300">Seamlessly connect with CRMs, ERPs, payment gateways, and other business tools.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="w-6 h-6 text-secondary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Dedicated Support</h3>
              <p class="text-gray-300">Priority access to our development team for ongoing maintenance and updates.</p>
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
              <span>Businesses with unique requirements</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Companies needing custom functionality</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>E-commerce businesses of any size</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Startups building MVPs</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Enterprises requiring complex integrations</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Businesses automating workflows</span>
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-4">How We Work</h3>
          <div class="space-y-4 text-white">
            <div class="flex items-start">
              <span
                class="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-6 mt-3">1</span>
              <div>
                <h4 class="font-bold mb-1">Discovery Call</h4>
                <p class="text-gray-300 text-sm !mt-0">We understand your needs and goals</p>
              </div>
            </div>
            <div class="flex items-start">
              <span
                class="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-6 mt-3">2</span>
              <div>
                <h4 class="font-bold mb-1">Scoping & Proposal</h4>
                <p class="text-gray-300 text-sm !mt-0">Detailed plan with timeline and pricing</p>
              </div>
            </div>
            <div class="flex items-start">
              <span
                class="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-6 mt-3">3</span>
              <div>
                <h4 class="font-bold mb-1">Design & Development</h4>
                <p class="text-gray-300 text-sm !mt-0">Iterative build with regular check-ins</p>
              </div>
            </div>
            <div class="flex items-start">
              <span
                class="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-6 mt-3">4</span>
              <div>
                <h4 class="font-bold mb-1">Launch & Support</h4>
                <p class="text-gray-300 text-sm !mt-0">Deployment and ongoing maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="max-w-[1440px] mx-auto px-4 pb-14 md:pb-20">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Let's Discuss Your Project</h2>
        <p class="text-xl text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
      </div>

      <div v-if="submitSuccess" class="bg-secondary/20 border-2 border-secondary rounded-2xl p-8 text-center mb-8">
        <svg class="w-16 h-16 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-bold text-white mb-2">Thank you!</h3>
        <p class="text-gray-300 text-sm">We've received your enquiry and will be in touch soon to discuss your project.
        </p>
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
          <label for="projectType" class="block text-white font-semibold mb-2">What type of project do you need?
            *</label>
          <select v-model="form.projectType" id="projectType" required
            class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:outline-none focus:border-secondary transition-colors appearance-none"
            style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.25rem; padding-right: 3rem;">
            <option value="">Select project type</option>
            <option value="ecommerce">E-commerce Website</option>
            <option value="webapp">Custom Web Application</option>
            <option value="api">API Development</option>
            <option value="integration">System Integration</option>
            <option value="mobile">Mobile App</option>
            <option value="other">Other (please specify in message)</option>
          </select>
        </div>

        <div class="mb-6">
          <label class="block text-white font-semibold mb-3">What features do you need?</label>
          <div class="grid md:grid-cols-2 gap-3">
            <label v-for="option in featureOptions" :key="option" class="flex items-center">
              <input type="checkbox" :value="option" v-model="form.features"
                class="w-5 h-5 bg-white/10 border-2 border-white/20 rounded text-secondary focus:ring-secondary focus:ring-2" />
              <span class="ml-3 text-gray-300">{{ option }}</span>
            </label>
          </div>
        </div>

        <div class="mb-6">
          <label for="budget" class="block text-white font-semibold mb-2">What's your budget range?</label>
          <select v-model="form.budget" id="budget"
            class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:outline-none focus:border-secondary transition-colors appearance-none"
            style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.25rem; padding-right: 3rem;">
            <option value="">Select budget range</option>
            <option value="under-5k">Under £5,000</option>
            <option value="5-10k">£5,000 - £10,000</option>
            <option value="10-25k">£10,000 - £25,000</option>
            <option value="25-50k">£25,000 - £50,000</option>
            <option value="50k-plus">£50,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="timeline" class="block text-white font-semibold mb-2">What's your timeline?</label>
          <select v-model="form.timeline" id="timeline"
            class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:outline-none focus:border-secondary transition-colors appearance-none"
            style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.25rem; padding-right: 3rem;">
            <option value="">Select timeline</option>
            <option value="urgent">Urgent (ASAP)</option>
            <option value="1-2months">1-2 months</option>
            <option value="2-3months">2-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6months-plus">6+ months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="message" class="block text-white font-semibold mb-2">Tell us about your project *</label>
          <textarea v-model="form.message" id="message" required rows="6"
            class="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors resize-none"
            placeholder="What problem are you trying to solve? What's your vision for the project? Any technical requirements or constraints?"></textarea>
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
