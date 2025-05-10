<script setup lang="ts">
import HeroComponent from '~/components/HeroComponent.vue';
import TextComponent from '~/components/TextComponent.vue';
import SplitContentComponent from '~/components/SplitContentComponent.vue';
import AccreditationsComponent from '~/components/AccreditationsComponent.vue';
import ServiceCardsComponent from '~/components/ServiceCardsComponent.vue'
import CaseStudyComponent from '~/components/CaseStudyComponent.vue';

import type { ContentBlock } from '~/types/contentBlock';

const props = defineProps<{ content: ContentBlock[] }>();

const getComponent = (item: ContentBlock) => {
  switch (item.__component) {
    case 'components.hero':
      return HeroComponent;
    case 'components.text':
      return TextComponent;
    case 'components.split':
      return SplitContentComponent;
    case 'components.accreditations':
      return AccreditationsComponent;
    case 'components.services-list':
      return ServiceCardsComponent;
    case 'components.case-study':
      return CaseStudyComponent;
    default:
      return null;
  }
};
</script>

<template>
  <component 
    v-for="item in content" 
    :key="item.id"
    :is="getComponent(item)" 
    v-bind="item" 
  />  
</template>