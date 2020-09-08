<template>
  <v-app dark>
    <!-- <v-app-bar app dark v-if="currentAccount" class="rs-header">
      <div>
        <v-btn text :to="{ name: 'find.boss.selection' }">Find</v-btn>
        <v-btn text :to="{ name: 'host.boss.selection' }">Host</v-btn>
      </div>
      
      <user-profile />
    </v-app-bar>-->

    <v-main class="rs-bg">
      <router-view></router-view>
      <v-dialog
        v-if="!onHomePage"
        v-model="open"
        :fullscreen="$vuetify.breakpoint.mobile"
        :max-width="$vuetify.breakpoint.mobile ? 1000 : 500"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            v-model="open"
            color="purple darken-2"
            dark
            fab
            v-bind="attrs"
            v-on="on"
            style="position: fixed;bottom: 24px; right: 24px; z-index: 1000;"
          >
            <v-icon v-if="open">mdi-close</v-icon>
            <v-badge v-else left color="indigo" :content="unreadMessages" :value="unreadMessages">
              <v-icon>message</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <message-card @close="open = false" />
      </v-dialog>
    </v-main>

    <v-bottom-navigation grow app shift color="purple">      
      <user-profile/>
      <!-- <v-btn style="height: inherit !important;">
        <v-icon>{{ $store.getters.currentAccount.type.icon }}</v-icon>
        <span>{{ $store.getters.currentAccount.username }}</span>
      </v-btn> -->
      <v-btn :to="{ name: 'find.boss.selection' }" style="height: inherit !important;">
        <span>Find</span>
        <v-icon>search</v-icon>
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
    UserProfile: () => import("@/components/UserProfile.vue"),
    MessageCard: () => import("@/components/MessageCard.vue"),
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    ...mapGetters(["unreadMessages", "currentAccount"]),
    onHomePage(): boolean {
      return this.$route.name === "start";
    },
  },
});
</script>