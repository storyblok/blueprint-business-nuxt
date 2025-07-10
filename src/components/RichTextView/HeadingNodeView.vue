<template>
  <template v-if="node.attrs.level === 1">
    <h1 class="text-6xl font-extrabold mt-12 mb-6">
      <RichTextNodes :nodes="node.content"></RichTextNodes>
    </h1>
  </template>

  <template v-if="node.attrs.level === 2">
    <h2 class="text-5xl font-extrabold mt-10 mb-5">
      <RichTextNodes :nodes="node.content"></RichTextNodes>
    </h2>
  </template>

  <template v-if="node.attrs.level === 3">
    <h3 class="text-4xl font-extrabold mt-8 mb-4">
      <RichTextNodes :nodes="node.content"></RichTextNodes>
    </h3>
  </template>

  <template v-if="node.attrs.level === 4">
    <h4 class="text-3xl font-extrabold mt-6 mb-3">
      <RichTextNodes :nodes="node.content"></RichTextNodes>
    </h4>
  </template>

  <template v-if="node.attrs.level === 5">
    <h5 class="text-2xl font-extrabold mt-5 mb-2">
      <RichTextNodes :nodes="node.content"></RichTextNodes>
    </h5>
  </template>

  <template v-if="node.attrs.level === 6">
    <h6 class="text-xl font-extrabold mt-4 mb-2">
      <RichTextNodes :nodes="node.content"></RichTextNodes>
    </h6>
  </template>
</template>

<script setup lang="ts">
import type { HeadingNode } from '../../delivery-api'
import RichTextNodes from './RichTextNodes.vue'

export type HeadingNodeViewProps = {
  node: HeadingNode
}

const props = defineProps<HeadingNodeViewProps>()
</script>
