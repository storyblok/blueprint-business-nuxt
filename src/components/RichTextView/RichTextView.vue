<template>
  <template v-if="node.type === 'doc'">
    <div class="display-block">
      <RichTextNodes :nodes="node.content"></RichTextNodes>
    </div>
  </template>

  <template v-if="node.type === 'paragraph'">
    <ParagraphNodeView :node="node"></ParagraphNodeView>
  </template>

  <template v-if="node.type === 'text'">
    <TextNodeView :node="node"></TextNodeView>
  </template>

  <template v-if="node.type === 'heading'">
    <HeadingNodeView :node="node"></HeadingNodeView>
  </template>

  <template v-if="node.type === 'bullet_list'">
    <BulletListNodeView :node="node"></BulletListNodeView>
  </template>

  <template v-if="node.type === 'ordered_list'">
    <OrderedListNodeView :node="node"></OrderedListNodeView>
  </template>

  <template v-if="node.type === 'code_block'">
    <CodeBlockNodeView :node="node"></CodeBlockNodeView>
  </template>

  <template v-if="node.type === 'horizontal_rule'">
    <hr class="border-t border-gray-300 my-4" />
  </template>

  <template v-if="node.type === 'blockquote'">
    <BlockQuoteNodeView :node="node"></BlockQuoteNodeView>
  </template>

  <template v-if="node.type === 'image'">
    <ImageNodeView :node="node"></ImageNodeView>
  </template>

  <template v-if="node.type === 'blok'">
    <BlockNodeView :node="node"></BlockNodeView>
  </template>
</template>

<script setup lang="ts">
import type {
  BlockNode,
  BlockQuoteNode,
  BulletListNode,
  CodeBlockNode,
  DocNode,
  HeadingNode,
  ImageNode,
  OrderedListNode,
  ParagraphNode,
  RichTextContent,
  TextNode,
} from '../../delivery-api'
import RichTextNodes from './RichTextNodes.vue'
import TextNodeView from './TextNodeView.vue'
import HeadingNodeView from './HeadingNodeView.vue'
import BulletListNodeView from './BulletListNodeView.vue'
import OrderedListNodeView from './OrderedListNodeView.vue'
import CodeBlockNodeView from './CodeBlockNodeView.vue'
import BlockQuoteNodeView from './BlockQuoteNodeView.vue'
import ImageNodeView from './ImageNodeView.vue'
import ParagraphNodeView from './ParagraphNodeView.vue'
import BlockNodeView from './BlockNodeView.vue'

export type RichTextProps = {
  node: RichTextContent
}

const props = defineProps<RichTextProps>()
</script>
