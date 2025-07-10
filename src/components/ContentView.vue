<template>
  <template v-if="content.component === 'page'">
    <PageView :content="content"></PageView>
  </template>

  <template v-if="content.component === 'testimonials'">
    <TestimonialsView :content="content"></TestimonialsView>
  </template>

  <template v-if="content.component === 'testimonial'">
    <TestimonialView :content="content"></TestimonialView>
  </template>

  <template v-if="content.component === 'cards'">
    <CardsView :content="content"></CardsView>
  </template>

  <template v-if="content.component === 'card'">
    <CardView :content="content"></CardView>
  </template>

  <template v-if="content.component === 'hero'">
    <HeroView :content="content"></HeroView>
  </template>

  <template v-if="content.component === 'tabs'">
    <TabsView :content="content"></TabsView>
  </template>

  <template v-if="content.component === 'teamMembers'">
    <TeamMembersView :content="content"></TeamMembersView>
  </template>

  <template v-if="content.component === 'button'">
    <ButtonView :content="content"></ButtonView>
  </template>
</template>

<script setup lang="ts">
import type {
  CardsContent,
  Content,
  HeroContent,
  PageContent,
  TestimonialContent,
  TestimonialsContent,
  TabsContent,
  TeamMembersContent,
  CardContent,
  ButtonContent,
} from '../content'
import TeamMembersView from './TeamMembers.vue'
import PageView from './PageView.vue'
import TestimonialsView from './TestimonialsView.vue'
import TestimonialView from './TestimonialView.vue'
import CardsView from './Cards.vue'
import HeroView from './Hero.vue'
import TabsView from './TabsView.vue'
import CardView from './Card.vue'
import ButtonView from './Button.vue'

export type ContentViewProps = {
  content: Content
}

/*
 * NOTE: when expressing conditionals with JSX or directives, TypeScript cannot infer the types. This is why we assert the type, even though it's technically incorrect.
 * Signal-based frameworks like Solid.js and Mitosis are simply incompatible with TypeScript in conditionals.
 */

const props = defineProps<ContentViewProps>()
</script>
