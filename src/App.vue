<template>
  <v-app dark>

    <v-app-bar v-if="currentAccount && !$vuetify.breakpoint.mobile" app>
      <div>
        <dark-mode-toggle />
      </div>

      <div>
        <v-btn :to="{ name: 'find.boss.selection' }" text>
          <span>Find</span>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn :to="{ name: 'host.boss.selection' }" text>
          <span>Host</span>
          <v-icon>play_arrow</v-icon>
        </v-btn>
      </div>

      <div>
        <v-btn :to="{ name: 'profile' }" class="profile_link" text>
          <v-icon>{{ currentAccount.type.icon}}</v-icon>
          <span class="ml-1">{{ currentAccount.username}}</span>
        </v-btn>
        <v-btn icon>
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main class="rs-bg">
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation v-if="currentAccount && $vuetify.breakpoint.mobile" grow app horizontal color="purple">
      <v-btn :to="{ name: 'find.boss.selection' }" style="height: inherit !important;">
        <span>Find</span>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn :to="{ name: 'profile' }" style="height: inherit !important;">
        <span>Profile</span>
          <v-icon>{{ currentAccount.type.icon}}</v-icon>
      </v-btn>
      <v-btn :to="{ name: 'host.boss.selection' }" style="height: inherit !important;">
        <span>Host</span>
        <v-icon>play_arrow</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import RunescapeAccount from "@/classes/RunescapeAccount";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    DarkModeToggle: () => import('@/components/DarkModeToggle.vue'),
  },
  computed: {
    ...mapGetters(["unreadMessages", "currentAccount"]),
    onHomePage(): boolean {
      return this.$route.name === "start";
    },
  },
});
</script>

<style scoped lang="scss">
.profile_link {
  line-height: 20px;
  &:hover {
    span {
      padding-bottom: 1px;
      border-bottom-width: 2px;
      border-bottom-style: solid;
    }
  }
}
</style>