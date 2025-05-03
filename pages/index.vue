<script setup lang="ts">
  const data = {
    hero : {
      image : "https://res.cloudinary.com/dunufhmqx/image/upload/v1746124680/Spinakker_from_old_portsmouth_e1q906.jpg",
      alt : "Photograph of the spinakker tower through Portmsouth",
      title : "home of digital design + innovation"
    },  
    text : {
      copy : "Where design meets strategy. We're a full service agency specialising in web design and development. Whether you're launching a new brand or streamlining operationgs, we blend creativity with technical expertise to help your business stand out and succeed.",
      hasCta : true,
      ctaHasArrow : true,
      ctaLink : "/about",    
      shortWidth : true,
    }
  }

  const services = {
    title: "how can we help your business",
    hasCta: true,
    serviceOne : {
      link: "/services",
      title: "design + branding",
      description: "We craft bespoke, user-focused designs that reflect your brand, drive engagement, and deliver seamless experiences across all devices.",
    },
    serviceTwo : {
      link: "/services",
      title: "web development",
      description: "We build fast, scalable websites using Strapi and Nuxt, ensuring high performance, responsiveness, SEO readiness, and smooth content management.",
    }
  }
</script>

<template>
  <LayoutContainerComponent>
    <HeroComponent
      :image="data.hero.image"
      :alt="data.hero.alt"
      :title="data.hero.title"
    />
  </LayoutContainerComponent>

  <LayoutContainerComponent>
    <TextComponent 
      :copy="data.text.copy"
      :hasCta="data.text.hasCta"
      :ctaHasArrow="data.text.ctaHasArrow"
      :ctaLink="data.text.ctaLink"
      :shortWidth="data.text.shortWidth"
    />
  </LayoutContainerComponent>

  <LayoutContainerComponent>
    <ServiceCardsComponent 
      :title="services.title"
      :hasCta="services.hasCta"
      :services="services"
      />
  </LayoutContainerComponent>


</template>