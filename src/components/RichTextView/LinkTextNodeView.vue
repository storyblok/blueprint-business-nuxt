<template>
  <template v-if="linkAttrs.linktype === 'url'">
    <NuxtLink
      target="_blank"
      rel="noopener noreferrer"
      :class="classFromLinkTextNode(node)"
      :to="linkAttrs.href"
      >{{ node.text }}</NuxtLink
    >
  </template>

  <template v-if="linkAttrs.linktype === 'story'">
    <NuxtLink
      target="_blank"
      rel="noopener noreferrer"
      :class="classFromLinkTextNode(node)"
      :to="hrefFromStoryLink(linkAttrs.href)"
      >{{ node.text }}</NuxtLink
    >
  </template>

  <template v-if="linkAttrs.linktype === 'email'">
    <NuxtLink
      :class="classFromLinkTextNode(node)"
      :to="`mailto:${linkAttrs.href}`"
      >{{ node.text }}</NuxtLink
    >
  </template>

  <template v-if="linkAttrs.linktype === 'asset'">
    <NuxtLink
      target="_blank"
      rel="noopener noreferrer"
      :class="classFromLinkTextNode(node)"
      :to="linkAttrs.href"
      >{{ node.text }}</NuxtLink
    >
  </template>
</template>

<script setup lang="ts">
import type { LinkAttrs, TextNode } from '../../delivery-api'
import { classFromTextNode } from './classFromTextNode'
import NuxtLink from '#app/components/nuxt-link'
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
