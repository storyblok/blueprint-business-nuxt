<template>
  <blockquote
    class="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6 py-2"
  >
    <RichTextNodes :nodes="node.content"></RichTextNodes>
  </blockquote>
</template>

<script setup lang="ts">
import type { BlockQuoteNode } from '../../delivery-api'
import RichTextNodes from './RichTextNodes.vue'

export type BlockQuoteNodeViewProps = {
  node: BlockQuoteNode
}

const props = defineProps<BlockQuoteNodeViewProps>()
</script>
