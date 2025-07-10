<template>
  <template
    :key="index"
    v-for="(node, index) in nodes"
  >
    <RichTextView :node="node"></RichTextView>
  </template>
</template>

<script setup lang="ts">
import type { RichTextContent } from '../../delivery-api'
import RichTextView from './RichTextView.vue'

export type RichTextNodesProps = {
  nodes: RichTextContent[]
}

const props = defineProps<RichTextNodesProps>()
</script>
