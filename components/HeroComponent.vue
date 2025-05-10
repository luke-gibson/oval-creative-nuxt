<script setup lang="ts">
    import type { Hero } from '@/types/hero'
    import { useCloudinary } from '~/composables/useCloudinary';
    const props = defineProps<Hero>()
    const transformedUrl = computed(() => useCloudinary(props.image?.url));
</script>

<template>
    <LayoutContainerComponent>
        <figure class="c-figure relative">
            <NuxtPicture 
                class="w-full h-[550px] overflow-hidden block rounded-2xl"
                :src="transformedUrl"
                :alt="image?.alternativeText" 
                :width="image?.width"
                :height="image?.height"
                format="avif,webp, jpg"
            />        
            <figcaption 
                class="absolute bottom-2 left-3 right-3 md:bottom-6 md:left-8 md:right-6 max-w-lg md:max-w-3xl z-10"
                v-if="Array.isArray(title)">
                <RichTextBlocks :data="title"/>
                <!-- <h1 class="text-white text-5xl md:text-7xl font-extrabold">{{ title }}</h1> -->
            </figcaption>
        </figure>
    </LayoutContainerComponent>
</template>

<style lang="scss">
    .c-figure {
        display: block;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;            
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 1rem;
            z-index: 1;
        }
    }
</style>