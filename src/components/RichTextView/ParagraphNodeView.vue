<template>
  <p class="text-base my-6">
    <RichTextNodes :nodes="node.content"></RichTextNodes>
  </p>
</template>

<script setup lang="ts">
import type { ParagraphNode } from '../../delivery-api'
import RichTextNodes from './RichTextNodes.vue'

export type ParagraphNodeViewProps = {
  node: ParagraphNode
}

const props = defineProps<ParagraphNodeViewProps>()
</script>
