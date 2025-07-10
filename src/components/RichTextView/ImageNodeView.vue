<template>
  <img
    class="overflow-hidden rounded-xl my-4"
    :src="node.attrs.src"
    :alt="node.attrs.alt"
    :title="node.attrs.title"
    :width="500"
    :height="500"
  />
</template>

<script setup lang="ts">
import type { ImageNode } from '../../delivery-api'

export type ImageNodeViewProps = {
  node: ImageNode
}

const props = defineProps<ImageNodeViewProps>()
</script>
