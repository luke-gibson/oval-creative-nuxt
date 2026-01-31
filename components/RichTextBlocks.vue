<script lang="ts" setup>
import type { RichTextBlockChild, RichTextBlocks } from '~/types/strapiRichText'
import { RichTextBlockChildType, RichTextBlockFormat, RichTextBlockType } from '~/types/strapiRichText'

defineProps<{
  data?: RichTextBlocks[]
}>()

function renderList(block: RichTextBlocks) {
  let html = ''
  block.children.forEach((child) => {
    html += '<li>'
    child.children.forEach((childChild) => {
      if (childChild.type === RichTextBlockChildType.text) {
        if (childChild.bold)
          html += `<strong>${childChild.text}</strong>`
        else if (childChild.italic)
          html += `<i>${childChild.text}</i>`
        else if (childChild.underline)
          html += `<u>${childChild.text}</u>`
        else if (childChild.strikethrough)
          html += `<s>${childChild.text}</s>`
        else
          html += childChild.text
      }
    })
    html += '</li>'
  })

  return html
}

function renderText(children: RichTextBlockChild[]) {
  let html = ''
  children.forEach((childChild) => {
    if (childChild.type === RichTextBlockChildType.text) {
      if (childChild.bold)
        html += `<strong>${childChild.text}</strong>`
      else if (childChild.italic)
        html += `<i>${childChild.text}</i>`
      else if (childChild.underline)
        html += `<u>${childChild.text}</u>`
      else if (childChild.strikethrough)
        html += `<s>${childChild.text}</s>`
      else
        html += childChild.text
    }
  })

  return html
}
</script>

<template>
  <div class="c-rich-text">
    <template v-for="(block, index) in data" :key="index">
      <!-- Paragraph -->
      <p v-if="block && block.type === RichTextBlockType.paragraph" class="mb-4 last:mb-0">
        <template v-for="(child, childIndex) in block.children" :key="`${childIndex}-${index}`">
          <strong v-if="child.type === RichTextBlockChildType.text && child.bold">{{ child.text }}</strong>
          <i v-else-if="child.type === RichTextBlockChildType.text && child.italic">{{ child.text }}</i>
          <u v-else-if="child.type === RichTextBlockChildType.text && child.underline">{{ child.text }}</u>
          <s v-else-if="child.type === RichTextBlockChildType.text && child.strikethrough">{{ child.text }}</s>
          <code v-else-if="child.type === RichTextBlockChildType.text && child.code" class="bg-gray-100 text-primary px-2 py-1 rounded">{{ child.text }}</code>
          <a v-else-if="child.type === RichTextBlockChildType.link && child.url" :href="child.url" class="text-primary underline hover:text-secondary" v-html="renderText(child.children)" />
          <template v-else-if="child.type === RichTextBlockChildType.text">
            {{ child.text }}
          </template>
        </template>
      </p>

      <!-- Lists -->
      <ul v-if="block && block.type === RichTextBlockType.list && block.format === RichTextBlockFormat.unordered" class="list-disc pl-6 mb-4 last:mb-0" v-html="renderList(block)" />
      <ol v-if="block && block.type === RichTextBlockType.list && block.format === RichTextBlockFormat.ordered" class="list-decimal pl-6 mb-4 last:mb-0" v-html="renderList(block)" />

      <!-- Headings -->
      <h1 v-if="block && block.type === RichTextBlockType.heading && block.level === 1" class="mb-6 mt-8 first:mt-0" v-html="renderText(block.children)" />
      <h2 v-if="block && block.type === RichTextBlockType.heading && block.level === 2" class="mb-5 mt-7 first:mt-0" v-html="renderText(block.children)" />
      <h3 v-if="block && block.type === RichTextBlockType.heading && block.level === 3" class="mb-4 mt-6 first:mt-0" v-html="renderText(block.children)" />
      <h4 v-if="block && block.type === RichTextBlockType.heading && block.level === 4" class="mb-3 mt-5 first:mt-0" v-html="renderText(block.children)" />
      <h5 v-if="block && block.type === RichTextBlockType.heading && block.level === 5" class="mb-3 mt-4 first:mt-0" v-html="renderText(block.children)" />
      <h6 v-if="block && block.type === RichTextBlockType.heading && block.level === 6" class="mb-2 mt-4 first:mt-0" v-html="renderText(block.children)" />

      <!-- Image -->
      <nuxt-img
        v-if="block && block.type === RichTextBlockType.image && block.image"
        provider="imagekit"
        :src="block.image.url"
        width="1000"
        :placeholder="15"
        :modifiers="{ f: 'webp' }"
        lazy="true"
        :alt="block.image.alternativeText ?? ''"
        :title="block.image.alternativeText ?? ''"
        class="rounded-lg my-6 w-full"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.c-rich-text {
  // List items spacing (for dynamically rendered content)
  :deep(li) {
    @apply mb-2 leading-relaxed;
  }

  // Ensure proper line breaks
  :deep(br) {
    @apply my-2;
  }
}
</style>
