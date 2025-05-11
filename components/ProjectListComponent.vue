<script lang="ts" setup>
    import type { Projects } from '@/types/projects'   
    const props = defineProps<Projects>()
</script>

<template>
    <LayoutContainerComponent
      class="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      :class="[hasSpaceBottom ? 'mb-14 md:mb-20' : '', hasSpaceTop ? 'mt-14 md:mt-20' : '']"
    >
      <ProjectCardComponent 
        v-for="project in project_lists"
        :key="project.id"
        :slug="project.slug"
        :name="project.name"
        :description="project.description"
        :image="project.image"
      />
    </LayoutContainerComponent>
  </template>