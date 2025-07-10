<template>
  <div
    class="flex flex-col items-stretch"
    v-bind="editableAttributes(content)"
  >
    <AppBarView></AppBarView
    ><template
      :key="index"
      v-for="(content, index) in content.body"
    >
      <ContentView :content="content"></ContentView> </template
    ><FooterView></FooterView>
  </div>
</template>

<script setup lang="ts">
import AppBarView from './AppBar.vue'
import FooterView from './Footer.vue'
import ContentView from './ContentView.vue'
import type { PageContent } from '../content'
import { editableAttributes } from '@storyblok/preview-bridge'

export type PageViewProps = {
  content: PageContent
}

const props = defineProps<PageViewProps>()
</script>
