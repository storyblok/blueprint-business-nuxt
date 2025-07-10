<script setup lang="ts">
import { fetchStory } from '~/delivery-api'
import { parseContent } from '~/content'
import ContentView from '~/components/ContentView.vue'
import { parseBridgeSearchParams } from '~/bridge'
import { usePreviewedStory } from '~/pages/usePreviewedStory'

const runtimeConfig = useRuntimeConfig()

const route = useRoute()

const slugs = computed<string[]>(() =>
  // Can be ""
  Array.isArray(route.params.slugs) ? route.params.slugs : [],
)

const storyblokSearchParams = computed(
  () => parseBridgeSearchParams(route.query).value,
)

const { error, data } = await useAsyncData('story', async () => {
  if (!runtimeConfig.storyblokApiBaseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Storyblok API base URL is not configured.',
    })
  }
  if (!runtimeConfig.storyblokDeliveryApiToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Storyblok Delivery API token is not configured.',
    })
  }

  const result = await fetchStory({
    baseUrl: runtimeConfig.storyblokApiBaseUrl,
    slugs: slugs.value,
    deliveryApiToken: runtimeConfig.storyblokDeliveryApiToken,
    storyblokSearchParams: storyblokSearchParams.value,
    resolveRelations: ['teamMembers.teamMembers'],
  }).catch(() => {
    throw createError({
      statusCode: 404,
      statusMessage: 'Story not found.',
    })
  })
  return result.story
})

if (error.value) {
  // If there is an error, we can handle it here or let the error component handle it
  throw error.value
}

const previewedStory = usePreviewedStory(
  () => storyblokSearchParams.value.version === 'draft',
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
