<script setup lang="ts">
  import type { HomeData } from '~/types/home';
  const config = useRuntimeConfig();
  const route = useRoute()

  const { data } = await useAsyncData<HomeData>('home', () => 
    $fetch(`${config.public.strapiUrl}/api/home?pLevel`)
  );

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
  });



  const mockData = {
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
      hasSpaceBottom: true,
      hasSpaceTop: true,
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
  }

  const services = {
    title: "how can we help your business",
    hasCta: true,
    hasSpaceBottom: false,
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
 
  <DynamicContent v-if="data" :content="data.data.content" />

  <LayoutContainerComponent>
    <CaseStudyComponent
      :link="mockData.caseStudyCard.link"
      :image="mockData.caseStudyCard.image"
      :alt="mockData.caseStudyCard.alt"
      :hasCta="mockData.caseStudyCard.hasCta"
      :hasCtaIcon="mockData.caseStudyCard.hasCtaIcon"
      :ctaText="mockData.caseStudyCard.ctaText"
      :copy="mockData.caseStudyCard.copy"
      :brandLogoAlt="mockData.caseStudyCard.brandLogoAlt"
      :brandLogoUrl="mockData.caseStudyCard.brandLogoUrl"
      :hasSpaceBottom="mockData.caseStudyCard.hasSpaceBottom"
      :hasSpaceTop="mockData.caseStudyCard.hasSpaceTop"
      />
  </LayoutContainerComponent>
</template>