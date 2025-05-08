<script lang="ts" setup>
 const data = {
    hero : {
      image : "https://res.cloudinary.com/dunufhmqx/image/upload/v1746729519/still_and_west_southsea_l19q1j.jpg",
      alt : "Photograph of the pub in southsea, the still and west",
      title : "previous projects oval creative"
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
</template>