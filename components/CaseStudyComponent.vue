<script setup lang="ts">
import type { CaseStudyCard } from '@/types/caseStudyCard'
const props = defineProps<CaseStudyCard>();
const transformedUrl = computed(() => useCloudinary(props.image?.formats.large.url));
</script>

<template>
  <LayoutContainerComponent>
    <figure class="c-casestudy relative"
      :class="[hasSpaceBottom ? 'mb-14 md:mb-20' : '', hasSpaceTop ? 'mt-14 md:mt-20' : '']">
      <NuxtPicture 
        class="w-full h-[550px] overflow-hidden block rounded-2xl" 
        :src="transformedUrl"
        :alt="image?.alternativeText" 
        :width="image?.width" 
        :height="image?.height" 
        format="avif,webp, jpg" />
      <figcaption
        class="absolute bottom-6 left-5 right-5 md:bottom-10 md:left-12 md:right-12 max-w-lg md:max-w-4xl z-10">
        <NuxtImg 
          class="w-full max-w-[175px] md:max-w-[250px] mb-4" 
          :src="brandLogo?.url" 
          :width="brandLogo?.width" 
          :height="brandLogo?.height" 
          :alt="brandLogo?.alternativeText" />
        <RichTextBlocks :data="copy" />
        <ButtonsSecondaryButton 
          v-if="hasCta" 
          :to="link" 
          class="mt-6 inline-flex">
          {{ ctaText }}
          <IconsRightIcon 
            v-if="hasCtaIcon" 
            class="ml-2 w-5 inline-block" />
        </ButtonsSecondaryButton> 
      </figcaption>
    </figure>
  </LayoutContainerComponent>
</template>

<style lang="scss">
.c-casestudy {
  display: block;

  picture {
    img {
      width: 120%;
      height: 120%;
      object-fit: cover;
      object-position: center center;
      filter: blur(6px);
      transform: scale(1.1);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 1rem;
      z-index: 1;
    }
  }
}
</style>