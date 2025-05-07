<template>
  <footer class="py-12 md:py-16">
    <LayoutContainerComponent class="flex justify-between flex-wrap items-end md:text-xl leading-6 md:leading-8">
      <div class="w-full md:w-2/3">
        <IconsLogoDark class="w-52 md:w-64 mb-10"/>
        <h3 class="font-bold text-xl md:text-3xl mb-4">
          Have a project in mind?
        </h3>
        <p class="max-w-lg">
          We'd love to hear about it. Whether you're starting fresh or need help levelling up, get in touch and let's make something great together.
        </p>
      </div>
      <div class="mt-6 md:mt-0 md:text-right">
        <h3 class="font-bold text-xl md:text-3xl mb-4">
          How to reach us          
        </h3>        
        <NuxtLink class="inline-block hover:text-secondary transition-all" to="tel:07513822562">+44 7513 822 562</NuxtLink>
        <NuxtLink class="block hover:text-secondary transition-all" to="mailto:letschat@ovalcreative.co.uk">letschat@ovalcreative.co.uk</NuxtLink>
        <p>Send a <NuxtLink class="font-bold text-secondary hover:text-primary transition-all" to="https://wa.me/+447513822562">WhatsApp</NuxtLink></p>
      </div>     
    </LayoutContainerComponent>
    <LayoutContainerComponent class="mt-8 md:mt-12 flex justify-between flex-wrap">
        <div class="w-full md:w-auto">
          <p><strong class="text-lg">&copy; Oval Creative</strong> <NuxtLink class="md:ml-8 block md:inline hover:text-secondary transition-all">Privacy Policy</NuxtLink> <NuxtLink class="md:ml-8 block md:inline hover:text-secondary transition-all">Terms and Conditions</NuxtLink> <NuxtLink class="md:ml-8 block md:inline hover:text-secondary transition-all">Cookie Policy</NuxtLink></p>
        </div>
        <div class="flex mt-8 md:mt-0">
          <NuxtLink class="text-primary hover:text-secondary transition-all" to="https://facebook.com">
            <IconsFacebook class="h-7 mr-3"/>
          </NuxtLink>
          <NuxtLink class="text-primary hover:text-secondary transition-all" to="https://instagram.com">
            <IconsInstagram class="h-7 mr-3"/>
          </NuxtLink>
          <NuxtLink class="text-primary hover:text-secondary transition-all" to="https://facebook.com">
            <IconsLinkedin class="h-7 mr-3"/>
          </NuxtLink>
          <NuxtLink class="text-primary hover:text-secondary transition-all" to="https://wa.me/+447513822562">
            <IconsWhatsapp class="h-7"/>
          </NuxtLink>
        </div>        
    </LayoutContainerComponent>
  </footer>
</template>
