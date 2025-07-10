<template>
  <template v-if="getLinkMark(node)">
    <LinkTextNodeView
      :node="node"
      :linkAttrs="getLinkMark(node).attrs"
    ></LinkTextNodeView>
  </template>

  <template v-if="!getLinkMark(node)">
    <span :class="classFromTextNode(node)">{{ node.text }}</span>
  </template>
</template>

<script setup lang="ts">
import type { LinkMark, TextNode } from '../../delivery-api'
import LinkTextNodeView from './LinkTextNodeView.vue'
import { classFromTextNode } from './classFromTextNode'
const getLinkMark = (node: TextNode): LinkMark | undefined =>
  node.marks.find((mark) => mark.type === 'link')

export type TextNodeViewProps = {
  node: TextNode
}

const props = defineProps<TextNodeViewProps>()
</script>
