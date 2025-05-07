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
    },
    caseStudyCard : {
      image : "https://res.cloudinary.com/dunufhmqx/image/upload/v1746391003/isle-contracts-case-study_exgk7l.jpg",
      alt : "Photograph of the spinakker tower through Portmsouth",
      brandLogoUrl : "https://res.cloudinary.com/dunufhmqx/image/upload/v1746389266/isleContractsLogo_noqavz.svg",
      brandLogoAlt : "Isle Contracts Logo",
      copy : "Where design meets strategy. We're a full service agency specialising in web design and development. We blend creativity with technical expertise to help your business stand out and succeed.",
      link : "/projects",
      hasCta: true,
      hasCtaIcon: true,
      ctaText: "View Isle Contracts",
    },
    accreditations : {
      copy : "Our modern tech stack powers fast, scalable websites that look great and perform even better.",
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
  }

  const services = {
    title: "how can we help your business",
    hasCta: true,
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
    />
  </LayoutContainerComponent>

  <LayoutContainerComponent>
    <ServiceCardsComponent 
      :title="services.title"
      :hasCta="services.hasCta"
      :serviceList="services.serviceList"
      />
  </LayoutContainerComponent>

  <LayoutContainerComponent>
    <CaseStudyComponent
      :link="data.caseStudyCard.link"
      :image="data.caseStudyCard.image"
      :alt="data.caseStudyCard.alt"
      :hasCta="data.caseStudyCard.hasCta"
      :hasCtaIcon="data.caseStudyCard.hasCtaIcon"
      :ctaText="data.caseStudyCard.ctaText"
      :copy="data.caseStudyCard.copy"
      :brandLogoAlt="data.caseStudyCard.brandLogoAlt"
      :brandLogoUrl="data.caseStudyCard.brandLogoUrl"/>
  </LayoutContainerComponent>

  <LayoutContainerComponent>
    <AccreditationsComponent 
      :copy="data.accreditations.copy"
      :images="data.accreditations.images"/>
  </LayoutContainerComponent>
</template>