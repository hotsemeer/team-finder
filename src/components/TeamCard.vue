<template>
  <v-card style="max-width: 400px;" outlined>
    <v-card-title>
      <v-img
        :src="require(`@/assets/bosses/${team.boss.image}`)"
        class="mr-2"
        max-height="24"
        max-width="24"
      ></v-img>
      <span>{{ team.boss.name }}</span>
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>{{ team.created_at | date }}</v-card-subtitle>

    <v-list dense>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>person</v-icon>
        </v-list-item-icon>
        <v-list-item-content>{{ team.host.username }}</v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>group</v-icon>
        </v-list-item-icon>
        {{team.members_left}}/{{team.size}} Members
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>policy</v-icon>
        </v-list-item-icon>
        <v-list-item-content
          :class="`${expColour(team.required_experience)}--text`"
        >{{ team.required_experience }}</v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
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
        </v-list-item-icon>
        {{team.lootshare_type}}
      </v-list-item>

      <v-list-group v-if="team.required_roles.length" sub-group no-action>
        <template #activator>
          <v-list-item-content>
            <v-list-item-title>Roles left</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="(role, i) in team.required_roles" :key="i" dense>
          <v-list-item-title>{{ role }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group v-if="team.members.length" sub-group no-action>
        <template #activator>
          <v-list-item-content>
            <v-list-item-title>Current team</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="(member, i) in team.members" :key="i" dense>
          <v-list-item-title>{{ member }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn icon>
        <v-icon color="info" @click="sendMessage">message</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import ExperienceColourMixin from "@/mixins/ExperienceColourMixin";
import Team from "@/classes/Team";

export default Vue.extend({
  mixins: [ExperienceColourMixin],
  props: {
    team: Team,
  },
  methods: {
    sendMessage() {
      this.$emit("openMessages");
    },
  },
});
</script>