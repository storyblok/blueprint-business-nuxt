<template>
  <ul class="list-disc mb-6 pl-5">
    <template
      :key="index"
      v-for="(node, index) in node.content"
    >
      <li class="mb-2">
        <RichTextNodes :nodes="node.content"></RichTextNodes>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { BulletListNode } from '../../delivery-api'
import RichTextNodes from './RichTextNodes.vue'

export type BulletListNodeViewProps = {
  node: BulletListNode
}

const props = defineProps<BulletListNodeViewProps>()
</script>
