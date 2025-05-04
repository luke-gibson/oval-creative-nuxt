<script setup lang="ts">
  import type { Card } from '@/types/card'
  defineProps<Card>()
</script>

<template>
  <NuxtLink 
    :to="link"
    :title="title"
    :description="description"
    class="bg-[#3e4555] bg-opacity-60 rounded-2xl py-8 px-6 text-white border-t-8 border-secondary"
    >
    <h3 class="text-2xl font-bold pb-4">{{ title }}</h3>
    <p>{{ description }}</p>
    <button>
      <IconsRightIcon/>
    </button>
  </NuxtLink>
</template>