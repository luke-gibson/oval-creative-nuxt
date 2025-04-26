<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
  exact?: boolean
}>()

const route = useRoute()

const isActive = computed(() => {
  if (props.exact) {
    return route.path === props.to
  }
  return route.path.startsWith(props.to)
})
</script>

<template>
  <li class="c-nav__item">
    <NuxtLink
      :to="to"
      :class="[
        'c-nav__link font-bold transition-colors duration-300 ease-in-out hover:text-secondary focus:text-secondary',
        isActive ? 'text-secondary' : 'text-white',
        'md:mr-6'
      ]"
    >
      {{ label }}
    </NuxtLink>
  </li>
</template>