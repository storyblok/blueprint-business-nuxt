// server/api/my-data.get.ts
import { fetchStory } from '~/delivery-api'
import { parseBridgeSearchParams } from '~/bridge'
import { array, object, parseString } from 'pure-parse'

const parseRequestBody = object({
  slugs: array(parseString),
  query: parseBridgeSearchParams,
  resolveRelations: array(parseString),
})

export default defineEventHandler(async (event) => {
  const bodyResult = parseRequestBody(await readBody<unknown>(event))

  if (bodyResult.error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid request body',
      data: bodyResult.error,
    })
  }

  const {
    slugs,
    query: bridgeSearchParams,
    resolveRelations,
  } = bodyResult.value

  const { storyblokApiBaseUrl, storyblokDeliveryApiToken } = useRuntimeConfig()
  if (!storyblokDeliveryApiToken || !storyblokApiBaseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Missing Storyblok configuration.',
    })
  }

  return await fetchStory({
    baseUrl: storyblokApiBaseUrl,
    slugs: slugs,
    deliveryApiToken: storyblokDeliveryApiToken,
    bridgeSearchParams,
    resolveRelations,
  })
})
