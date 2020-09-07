<template>
  <v-app @keypress.s="focus" dark>
    <v-app-bar app dark v-if="currentAccount" class="rs-header">
      <div>
        <v-btn text :to="{ name: 'find.boss.selection' }">Find</v-btn>
        <v-btn text :to="{ name: 'host.boss.selection' }">Host</v-btn>
      </div>

      <div class="d-none d-sm-block">
        <search-bar ref="search" />
      </div>
      
      <user-profile />
    </v-app-bar>

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
            color="blue darken-2"
            dark
            fab
            v-bind="attrs"
            v-on="on"
            style="position: fixed;bottom: 24px; right: 24px"
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
    SearchBar: () => import('@/components/SearchBar.vue'),
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    ...mapGetters(["unreadMessages", "currentAccount"]),
    onHomePage(): boolean {
      return this.$route.name === 'start';
    }
  },
  methods: {
    focus() {
      console.log('adsf')
      const search = this.$refs.search as HTMLElement
      search.focus()
    }
  }
});
</script>