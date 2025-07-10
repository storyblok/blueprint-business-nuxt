<template>
  <template v-if="linkAttrs.linktype === 'url'">
    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="linkAttrs.href"
      :class="classFromLinkTextNode(node)"
      >{{ node.text }}</a
    >
  </template>

  <template v-if="linkAttrs.linktype === 'story'">
    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="hrefFromStoryLink(linkAttrs.href)"
      :class="classFromLinkTextNode(node)"
      >{{ node.text }}</a
    >
  </template>

  <template v-if="linkAttrs.linktype === 'email'">
    <a
      :href="`mailto:${linkAttrs.href}`"
      :class="classFromLinkTextNode(node)"
      >{{ node.text }}</a
    >
  </template>

  <template v-if="linkAttrs.linktype === 'asset'">
    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="linkAttrs.href"
      :class="classFromLinkTextNode(node)"
      >{{ node.text }}</a
    >
  </template>
</template>

<script setup lang="ts">
import type { LinkAttrs, TextNode } from '../../delivery-api'
import { classFromTextNode } from './classFromTextNode'
/**
 * Converts a story link slug to a URL path for this application.
 * `/pages/mypage` -> `/mypage`
 * @param slugs
 */
const hrefFromStoryLink = (slugs: string): string =>
  '/' + slugs.split('/').slice(2).join('/')
const classFromLinkTextNode = (node: TextNode): string =>
  `text-blue-600 hover:text-blue-800 underline ${classFromTextNode(node)}`

export type TextNodeViewProps = {
  node: TextNode
  linkAttrs: LinkAttrs
}

const props = defineProps<TextNodeViewProps>()
</script>
