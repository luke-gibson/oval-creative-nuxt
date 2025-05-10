<script setup lang="ts">
import type { ServiceData } from '~/types/service';
const route = useRoute();
const config = useRuntimeConfig();

const requestUrl = `${config.public.strapiUrl}/api/services`;

const { data: service } = await useAsyncData<{ data: ServiceData[] }>(`service-${route.params.slug}`, () =>
  $fetch<{ data: ServiceData[] }>(`${requestUrl}?pLevel&filters[slug][$eq]=${route.params.slug}`)
);

</script>

<template>
    
</template>