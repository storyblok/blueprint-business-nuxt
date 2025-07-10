<template>
  <div
    class="self-stretch px-5 py-10 md:px-20 md:py-24 items-center flex flex-col"
    v-bind="editableAttributes(content)"
  >
    <div class="max-w-6xl flex flex-col gap-10">
      <RichTextView :node="content.description"></RichTextView>
      <div
        class="self-stretch flex justify-start items-stretch gap-4 md:gap-6 flex-col md:flex-row"
      >
        <template
          :key="member.content._uid"
          v-for="(member, index) in content.teamMembers"
        >
          <TeamMemberView :content="member.content"></TeamMemberView>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamMembersContent } from '../content'
import { editableAttributes } from '@storyblok/preview-bridge'
import TeamMemberView from './TeamMember.vue'
import RichTextView from './RichTextView'

export type TeamMembersViewProps = {
  content: TeamMembersContent
}

const props = defineProps<TeamMembersViewProps>()
</script>
