<script setup lang="ts">
import { parseContent } from '~/content'
import ContentView from '~/components/ContentView.vue'
import { parseBridgeSearchParams } from '~/bridge'
import { usePreviewedStory } from '~/pages/usePreviewedStory'

const route = useRoute()

const slugs = computed<string[]>(() =>
  // The slugs can be an empty string -> []
  Array.isArray(route.params.slugs) ? route.params.slugs : [],
)

const { error, data } = await useAsyncData(
  // Re-fetch when the slugs change
  slugs.value.join('/'),
  async () => {
    const result = await $fetch('/api/story', {
      method: 'POST',
      body: {
        slugs: slugs.value,
        query: route.query,
        resolveRelations: ['teamMembers.teamMembers'],
      },
    }).catch((e) => {
      throw createError({
        statusCode: 404,
        statusMessage: 'Story not found.',
      })
    })
    return result.story
  },
)

if (error.value) {
  // If there is an error, we can handle it here or let the error component handle it
  throw error.value
}

const previewedStory = usePreviewedStory(
  () => parseBridgeSearchParams(route.query).value.version === 'draft',
)

const content = computed(() => {
  const result = parseContent(
    // If the story is being previewed, use the previewed content
    previewedStory.value ? previewedStory.value.content : data.value?.content,
  )
  if (result.error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to parse content.',
    })
  }
  return result.value
})
</script>

<template>
  <ContentView :content="content" />
</template>

<style scoped></style>
