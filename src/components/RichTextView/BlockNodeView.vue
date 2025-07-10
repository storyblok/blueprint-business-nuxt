<template>
  <div>
    <template
      :key="index"
      v-for="(content, index) in parseBody(node.attrs.body).value"
    >
      <ContentView :content="content"></ContentView>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { BlockNode } from '../../delivery-api'
import ContentView from '../ContentView.vue'
import { array, withDefault } from 'pure-parse'
import { parseContent } from '../../content'
const parseBody = withDefault(array(parseContent), [])

export type BlockNodeViewProps = {
  node: BlockNode
}

const props = defineProps<BlockNodeViewProps>()
</script>
