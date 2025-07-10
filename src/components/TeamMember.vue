<template>
  <div
    class="w-96 inline-flex flex-col justify-start items-start gap-6"
    v-bind="editableAttributes(content)"
  >
    <div
      :class="`self-stretch relative rounded-xl inline-flex justify-start items-center gap-2.5 overflow-hidden ${backgroundColor(
        content.backgroundColor,
      )}`"
    >
      <template v-if="content.image">
        <img
          class="translate-y-[50px] w-96 h-96 rounded-md object-contain"
          :src="content.image?.filename"
          :alt="content.image?.alt ?? ''"
          :width="368"
          :height="384"
        />
      </template>
    </div>
    <div class="self-stretch flex flex-col justify-start items-start">
      <div
        class="justify-start text-stone-900 text-2xl font-extrabold leading-loose"
      >
        {{ content.name }}
      </div>
      <div
        class="self-stretch justify-start text-stone-900 text-base font-normal leading-7"
      >
        {{ content.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamMemberContent } from '../content'
import { editableAttributes } from '@storyblok/preview-bridge'
import { backgroundColor } from './backgroundColorClass'

type TeamMemberViewProps = {
  content: TeamMemberContent
}

const props = defineProps<TeamMemberViewProps>()
</script>
