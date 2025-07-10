<template>
  <div
    class="self-stretch px-5 py-10 md:px-20 md:py-24 bg-neutral-100 items-center flex flex-col"
    v-bind="editableAttributes(content)"
  >
    <div class="max-w-6xl flex flex-col gap-10">
      <div
        class="self-stretch flex-1 inline-flex flex-col justify-center items-start gap-2"
      >
        <RichTextView :node="content.description"></RichTextView>
      </div>
      <div
        class="self-stretch flex justify-start items-stretch gap-4 md:gap-6 flex-col md:flex-row"
      >
        <template
          :key="card._uid"
          v-for="(card, index) in content.cards"
        >
          <CardView :content="card"></CardView>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardsContent } from '../content'
import { editableAttributes } from '@storyblok/preview-bridge'
import CardView from './Card.vue'
import RichTextView from './RichTextView'

export type CardsViewProps = {
  content: CardsContent
}

const props = defineProps<CardsViewProps>()
</script>
