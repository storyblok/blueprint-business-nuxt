<template>
  <pre
    class="bg-gray-100 text-gray-800 text-sm rounded-md p-4 overflow-x-auto font-mono border border-gray-300"
  ><code    ><RichTextNodes  :nodes="node.content"  ></RichTextNodes></code></pre>
</template>

<script setup lang="ts">
import type { CodeBlockNode } from '../../delivery-api'
import RichTextNodes from './RichTextNodes.vue'

export type CodeBlockNodeViewProps = {
  node: CodeBlockNode
}

const props = defineProps<CodeBlockNodeViewProps>()
</script>
