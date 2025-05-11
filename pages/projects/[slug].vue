<script lang="ts" setup>
import type { ProjectData } from '~/types/project';

const route = useRoute();
const config = useRuntimeConfig();

const requestUrl = `${config.public.strapiUrl}/api/project-lists`;

const { data: project } = await useAsyncData<{ data: ProjectData[] }>(
  `project-${route.params.slug}`,
  () =>
    $fetch<{ data: ProjectData[] }>(
      `${requestUrl}?pLevel&filters[slug][$eq]=${route.params.slug}`
    )
);

const projectData = computed(() => project.value?.data?.[0] || null)

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}${route.fullPath}`,
    },
  ],
});

useSeoMeta({
    title: projectData.value?.title || 'Default Title',
    ogTitle: projectData.value?.title || 'Default Title',
    description: projectData.value?.description || 'Default description',
    ogDescription: projectData.value?.description || 'Default description',
    ogImage: projectData.value?.image?.formats?.large?.url || projectData.value?.image?.url || 'https://example.com/default-image.png',
    twitterCard: 'summary_large_image',
});
</script>

<template>
  <div v-if="projectData">
    <DynamicContent :content="projectData.content" />
  </div>
  <p v-else>Project not found.</p>
</template>