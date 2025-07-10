import { parseStory, type Story } from '~/delivery-api'
import { loadUmdGlobal } from '~/bridge'
import StorblokBridge from '@storyblok/preview-bridge'
import { formatResult } from 'pure-parse'
import type { MaybeRefOrGetter } from 'vue'

export const usePreviewedStory = (enabled: MaybeRefOrGetter<boolean>) => {
  const previewedStory = ref<Story | undefined>(undefined)
  onMounted(() => {
    if (toValue(enabled)) {
      loadUmdGlobal<typeof StorblokBridge>(
        'https://app.storyblok.com/f/storyblok-v2-latest.js',
        'StoryblokBridge',
      ).then((StoryblokBridge) => {
        const bridge = new StoryblokBridge()
        bridge.on('input', (payload) => {
          const result = parseStory(payload.story)
          if (result.error) {
            console.error(
              `Failed to parse response from the bridge: ${formatResult(result)}`,
            )
            previewedStory.value = undefined
          } else {
            previewedStory.value = result.error ? undefined : result.value
          }
        })
      })
    }
  })
  return previewedStory
}
