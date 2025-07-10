<template>
  <ol class="list-decimal mb-6 pl-5">
    <template
      :key="index"
      v-for="(node, index) in node.content"
    >
      <li class="mb-2">
        <RichTextNodes :nodes="node.content"></RichTextNodes>
      </li>
    </template>
  </ol>
</template>

<script setup lang="ts">
import type { OrderedListNode } from '../../delivery-api'
import RichTextNodes from './RichTextNodes.vue'

export type OrderedListNodeViewProps = {
  node: OrderedListNode
}

const props = defineProps<OrderedListNodeViewProps>()
</script>
