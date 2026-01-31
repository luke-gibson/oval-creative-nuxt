<script lang="ts" setup>
import type { ProjectList } from '@/types/projectList'   
const props = defineProps<ProjectList>()

// Pattern for interesting grid layout
const getCardClass = (index: number) => {
  const pattern = [
    'md:col-span-8 md:row-span-2',  // Large wide
    'md:col-span-4 md:row-span-1',  // Small
    'md:col-span-4 md:row-span-1',  // Small
    'md:col-span-6 md:row-span-1',  // Medium
    'md:col-span-6 md:row-span-1',  // Medium
  ]
  return pattern[index % pattern.length]
}
</script>

<template>
  <LayoutContainerComponent
    :class="[hasSpaceBottom ? 'mb-14 md:mb-20' : '', hasSpaceTop ? 'mt-14 md:mt-20' : '']"
  >
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[280px]">
      <ProjectCardComponent 
        v-for="(project, index) in project_lists"
        :key="project.id"
        :slug="project.slug"
        :name="project.name"
        :description="project.description"
        :image="project.image"
        :index="index"
        :class="getCardClass(index)"
      />
    </div>
  </LayoutContainerComponent>
</template>
