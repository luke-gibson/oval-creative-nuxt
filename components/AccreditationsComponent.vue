<script setup lang="ts">
  import type { Accreditations } from '@/types/accreditations';
  defineProps<Accreditations>();
</script>

<template>
  <LayoutContainerComponent 
    class="flex flex-wrap justify-between"
    :class="[hasSpaceTop ? 'pt-14 md:pt-20' : '', hasSpaceBottom ? 'pb-14 md:pb-20' : '']"
    >
    <div class="md:w-1/3 md:pr-20">
      <RichTextBlocks :data="copy"/>
    </div>
    <div class="flex justifty-center md:justify-between w-full md:w-2/3 flex-wrap mt-4 md:mt-0">
      <LazyNuxtImg
        v-for="image in images"
        :src="image.url"
        :alt="image.alternativeText"
        class="w-full max-w-[125px] m-6 md:m-0 md:max-w-[200px] mx-auto "
      />
    </div>
  </LayoutContainerComponent>
</template> 