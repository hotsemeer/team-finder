<template>
  <v-container fill-height fluid>
    <v-row justify="space-around" align="start" class="fill-height">
      <v-col cols="12" md="4">
        <transition name="fade">
          <router-view class="mx-0 mx-md-5 mobile-fullscreen" />
        </transition>
      </v-col>

      <v-col cols="12" md="5">
        <div v-if="!teams.length" id="empty-list">
          <img :src="require(`@/assets/bosses/${boss.image}`)" />
          <div class="headline text-center">There are currently no teams for {{ boss.name }}</div>
          <div>
            <router-link :to="{ name: 'find.boss.selection' }">
              <v-btn text>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </router-link>
            <router-link :to="{ name: 'host.boss' }">
              <v-btn outlined>
                Host one
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </router-link>
          </div>
        </div>

        <v-list v-else min-width="340" max-width="600">
          <v-list-item-group>
            <v-list-item :to="{ name: 'host.boss', params: { bossName: boss.name } }" dense outline>
              <v-list-item-icon>
                <v-icon>go</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Create a team</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <team-list-item v-for="team in teams" :key="team.id" :team="team" />
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="12" md="3">
        <v-card max-width="15rem" outlined class="d-none d-md-block mt-5 ml-auto mr-auto">
          <v-card-title>Useful links:</v-card-title>
          <useful-links />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Team, { LootshareType } from "@/classes/Team";

export default Vue.extend({
  components: {
    TeamListItem: () => import("@/components/TeamListItem.vue"),
    UsefulLinks: () => import("@/components/UsefulLinks.vue"),
    TeamCard: () => import("@/components/TeamCard.vue"),
  },
  props: {
    boss: Object,
    preference: String,
    selectedTeam: Object,
  },
  computed: {
    background(): string {
      return this.boss ? `background-image: url("${this.boss.image}")` : "";
    },
    teams(): Team[] {
      return this.$store.state.teams;
    },
  },
});
</script>

<style scoped>
#empty-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  height: 100%;
}

#empty-list > *:not(:first-child) {
  margin-top: 12px;
}
</style>