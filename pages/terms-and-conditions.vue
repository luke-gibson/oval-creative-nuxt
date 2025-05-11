<script setup lang="ts">
  import type { TermsData } from '~/types/terms';
  const config = useRuntimeConfig();
  const route = useRoute()

  const { data } = await useAsyncData<TermsData>('privacy', () => 
    $fetch(`${config.public.strapiUrl}/api/term?pLevel`)
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
    title: data.value?.data.seo.title || 'Default Title',
    ogTitle: data.value?.data.seo.title || 'Default Title',
    description: data.value?.data.seo.description || 'Default description',
    ogDescription: data.value?.data.seo.description || 'Default description',
    ogImage: data.value?.data.seo.image?.formats?.large?.url || data.value?.data.seo.image?.url || 'https://example.com/default-image.png',
    twitterCard: 'summary_large_image',
  });
</script>

<template>
  <DynamicContent v-if="data" :content="data.data.content" />
</template>