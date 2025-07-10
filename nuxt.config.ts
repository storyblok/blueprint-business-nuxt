// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/eslint'],
  srcDir: 'src',
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['@storyblok/preview-bridge'],
  },
  runtimeConfig: {
    storyblokApiBaseUrl: process.env.STORYBLOK_API_BASE_URL,
    storyblokDeliveryApiToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  },
  fonts: {
    provider: 'google', // sets default provider
    families: [
      {
        name: 'Inter',
        weights: ['400', '500', '800'],
        styles: ['normal', 'italic'],
        subsets: ['latin'],
        display: 'swap',
        preload: true,
      },
    ],
  },
  devServer: {
    https: {
      key: './certificates/localhost-key.pem',
      cert: './certificates/localhost.pem',
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
