<script lang="ts" setup>
import type { ServiceData } from '~/types/service';

const route = useRoute();
const config = useRuntimeConfig();

const requestUrl = `${config.public.strapiUrl}/api/service-lists`;

const { data: project } = await useAsyncData<{ data: ServiceData[] }>(
  `project-${route.params.slug}`,
  () =>
    $fetch<{ data: ServiceData[] }>(
      `${requestUrl}?pLevel&filters[slug][$eq]=${route.params.slug}`
    )
);

const serviceData = computed(() => project.value?.data?.[0] || null)

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}${route.fullPath}`,
    },
  ],
});

useSeoMeta({
    title: serviceData.value?.title || 'Default Title',
    ogTitle: serviceData.value?.title || 'Default Title',
    description: serviceData.value?.description || 'Default description',
    ogDescription: serviceData.value?.description || 'Default description',
    ogImage: serviceData.value?.image?.formats?.large?.url || serviceData.value?.image?.url || 'https://example.com/default-image.png',
    twitterCard: 'summary_large_image',
});
</script>

<template>
  <div v-if="serviceData">
    <DynamicContent :content="serviceData.content" />
  </div>
  <p v-else>Project not found.</p>
</template>