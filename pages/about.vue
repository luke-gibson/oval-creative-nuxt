<script setup lang="ts">
  const data = {
    hero : {
      image : "https://res.cloudinary.com/dunufhmqx/image/upload/v1746646680/portsmouth_sailing_club_sygd0q.jpg",
      alt : "Photograph of the wrigley field after the cubs have won",
      title : "learn more about oval creative"
    },  
    text : {
      copy : "Where design meets strategy. We're a full service agency specialising in web design and development. Whether you're launching a new brand or streamlining operationgs, we blend creativity with technical expertise to help your business stand out and succeed.",
      hasCta : false,
      ctaHasArrow : true,
      ctaLink : "/about",    
      shortWidth : true,
      hasSpaceBottom: true,
      hasSpaceTop: true,
    },
    split : {
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia turpis erat, eget aliquam dui porttitor at. Sed nisl mi, fringilla sit amet odio eu, blandit tempor nibh. Vestibulum arcu massa, aliquet vitae bibendum rutrum, viverra non metus. ",
      invert: false,
      hasSpaceBottom: true,
      hasSpacetop: false,
      image : {
        url : "https://res.cloudinary.com/dunufhmqx/image/upload/v1746646978/southsea_beach_cafe_f64ozr.jpg",
        alt : "Photograph of the southsea beach cafe in the sunrise golden hour.",
      }
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
    <SplitContentComponent 
      :copy="data.split.copy"
      :invert="data.split.invert"
      :image="data.split.image"
      :hasSpaceBottom="data.split.hasSpaceBottom"
      :hasSpaceTop="data.split.hasSpacetop"
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