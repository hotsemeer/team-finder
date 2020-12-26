<template>
  <div v-if="!pageSelected">

    <div v-if="!$vuetify.breakpoint.mobile" class="ma-5 d-flex justify-space-around">
      <div class="achievement">
        <v-subheader style="height: 30px" class="pa-0">Last achievement</v-subheader>
        <div class="d-flex">
          <v-icon left color="white">mdi-trophy</v-icon>
          <span>Hosted 5 times</span>
          <v-spacer></v-spacer>
          <span class="points">+ 200</span>
        </div>
      </div>
    </div>

    <v-container class="fill-height d-flex justify-space-around align-center">
      <v-card
        :to="{ name: tile.name }"
        v-for="tile in tiles"
        :key="tile.name"
        :width="$vuetify.breakpoint.mobile ? '300px' : '400px'"
        class="pa-0 pa-md-3 mt-5"
      >
        <v-responsive
          :aspect-ratio="$vuetify.breakpoint.mobile ? 7 / 2 : 16 / 9"
        >
          <v-row no-gutters class="fill-height">
            <v-icon color="deep-purple" class="col-3" large
              >mdi-{{ tile.icon }}</v-icon
            >
            <v-col class="d-flex flex-column justify-center">
              <v-card-title>{{ tile.title }}</v-card-title>
              <v-card-subtitle>{{ tile.description }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-responsive>
      </v-card>
    </v-container>
  </div>
  <div v-else class="fill-height">
    <v-toolbar>
      <v-btn icon @click="$emit('close')" :to="{ name: 'profile' }" exact>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer />
      <v-icon class="mr-2">mdi-{{ currentTile.icon }}</v-icon>
      <v-toolbar-title>{{ currentTile.title }}</v-toolbar-title>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["unreadMessages", "currentAccount"]),
    pageSelected() {
      return this.$route.name !== "profile";
    },
    currentTile() {
      return this.tiles.find((t) => t.name === this.$route.name);
    },
  },
  data() {
    return {
      tiles: [
        {
          name: "profile.settings",
          title: "Settings",
          description: "Manage the app's settings.",
          icon: "cog",
        },
        {
          name: "profile.accounts",
          title: "Accounts",
          description: "Add accounts, gear, perks and unlocks.",
          icon: "account-multiple",
        },
        {
          name: "profile.messages",
          title: "Messages",
          description: "Check or send your messages.",
          icon: "chat",
        },
        {
          name: 'profile.achievements',
          title: 'Achievements',
          description: 'See how you stack up against your friends.',
          icon: 'trophy',
        }
      ],
    };
  },
};
</script>

<style lang="scss">
.achievement {
  width: 300px;
  background-color: #7B1FA2;
  padding: 14px;
  border-radius: 2px;
  color: #fff;

  .v-subheader {
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
