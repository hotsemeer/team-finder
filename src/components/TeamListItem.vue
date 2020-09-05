<template>
  <v-list-item :to="{ name: 'team.details', params: { id: team.id } }">
    <v-list-item-icon>
      <v-avatar
        :color="expColour(team.required_experience)"
        class="white--text"
      >+{{ team.members_left}}</v-avatar>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ team.host.username }}</v-list-item-title>
      <v-list-item-subtitle>{{ team.size }} Man</v-list-item-subtitle>
      <v-list-item-subtitle v-if="team.required_roles.length" class="mt-2">
        <v-chip v-for="role in team.required_roles" :key="role">{{ role }}</v-chip>
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-list-item-action-text
        :class="`${expColour(team.required_experience)}--text`"
      >{{ team.required_experience }}</v-list-item-action-text>
      <b v-if="team.lootshare_type === 'Free For All'" class="text-decoration-underline">FFA</b>
      <img
        v-else-if="team.lootshare_type === 'LootShare'"
        :src="require('@/assets/LootShare.png')"
        width="24"
        height="24"
      />
      <img
        v-else-if="team.lootshare_type === 'CoinShare'"
        :src="require('@/assets/CoinShare.png')"
        width="24"
        height="24"
      />
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue';
import ExperienceColourMixin from '@/mixins/ExperienceColourMixin';

export default Vue.extend({
  mixins: [ExperienceColourMixin],
  props: {
    team: Object,
  },
});
</script>