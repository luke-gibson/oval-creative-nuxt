<script lang="ts" setup>
 const data = {
    hero : {
      image : "https://res.cloudinary.com/dunufhmqx/image/upload/v1746730703/old_bus_stop_in_southsea_ero01h.jpg",
      alt : "Photograph of the pub in southsea, the still and west",
      title : "how can we help your business"
    },  
    text : {
      copy : "Where design meets strategy. We're a full service agency specialising in web design and development. Whether you're launching a new brand or streamlining operationgs, we blend creativity with technical expertise to help your business stand out and succeed.",
      hasCta : false,
      ctaHasArrow : true,
      ctaLink : "/projects",    
      shortWidth : true,
      hasSpaceBottom: true,
      hasSpaceTop: true,
    },
    accreditations : {
      copy : "Our modern tech stack powers fast, scalable websites that look great and perform even better.",
      hasSpaceBottom: true,
      hasSpaceTop: false,
      images : [
        {
          url: "https://res.cloudinary.com/dunufhmqx/image/upload/v1746617163/logo-green-white_kekjss.svg",
          alt: "nuxt logo"
        },
        {
          url: "https://res.cloudinary.com/dunufhmqx/image/upload/v1746617021/Strapi.full.logo.light_lndlzo.svg",
          alt: "strapi logo"
        },
        {
          url: "https://res.cloudinary.com/dunufhmqx/image/upload/v1746617201/render-logo_wvkptv.svg",
          alt: "render logo"
        }
      ]  
    }
  };
  const services = {
    title: "",
    hasCta: false,
    hasSpaceBottom: true,
    hasSpaceTop: false,
    serviceList : [
      {
        link: "/services",
        title: "design + branding",
        description: "We craft bespoke, user-focused designs that reflect your brand, drive engagement, and deliver seamless experiences across all devices.",
      },
      {
        link: "/services",
        title: "web development",
        description: "We build fast, scalable websites using Strapi and Nuxt, ensuring high performance, responsiveness, SEO readiness, and smooth content management.",
      },
      {
        link: "/services",
        title: "design + branding",
        description: "We craft bespoke, user-focused designs that reflect your brand, drive engagement, and deliver seamless experiences across all devices.",
      },
      {
        link: "/services",
        title: "web development",
        description: "We build fast, scalable websites using Strapi and Nuxt, ensuring high performance, responsiveness, SEO readiness, and smooth content management.",
      }
    ]
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
      :hasSpaceBottom="data.text.hasSpaceBottom"
      :hasSpaceTop="data.text.hasSpaceTop"
    />
  </LayoutContainerComponent>

  <LayoutContainerComponent>
    <ServiceCardsComponent 
      :title="services.title"
      :hasCta="services.hasCta"
      :hasSpaceBottom="services.hasSpaceBottom"
      :hasSpaceTop="services.hasSpaceTop"
      :serviceList="services.serviceList"
      />
  </LayoutContainerComponent>

  <LayoutContainerComponent>
    <AccreditationsComponent 
      :copy="data.accreditations.copy"
      :images="data.accreditations.images"
      :hasSpaceBottom="data.accreditations.hasSpaceBottom"
      :hasSpaceTop="data.accreditations.hasSpaceTop"/>
  </LayoutContainerComponent>
</template>