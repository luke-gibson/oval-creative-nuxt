<script setup lang="ts">
  import type { Card } from '@/types/card'
  defineProps<Card>()
</script>

<template>
  <NuxtLink 
    :to="link"
    :title="title"
    :description="description">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button>
      <IconsRightIcon/>
    </button>
  </NuxtLink>
</template>