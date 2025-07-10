<template>
  <div
    :class="`flex flex-col justify-start items-start gap-4 bg-white rounded-[20px] p-4 sm:p-6 ${className}`"
    v-bind="editableAttributes(content)"
  >
    <template v-if="content.icon">
      <img
        class="box-content p-2 w-10 h-10 sm:w-[34px] sm:h-[34px]"
        :src="content.icon?.filename"
        :alt="content.icon?.alt ?? ''"
        :width="34"
        :height="34"
      />
    </template>

    <RichTextView :node="content.description"></RichTextView>
  </div>
</template>

<script setup lang="ts">
import type { CardContent } from '../content'
import { editableAttributes } from '@storyblok/preview-bridge'
import RichTextView from './RichTextView'

export type CardViewProps = {
  content: CardContent
  className?: string
}

const props = defineProps<CardViewProps>()
</script>
