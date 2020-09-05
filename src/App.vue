<template>
  <v-app>
    <v-app-bar app dark v-if="currentAccount" class="rs-background">
      <div>
        <v-btn icon :to="{ name: 'edit.user.profile' }">
          <v-icon>settings</v-icon>
        </v-btn>
        <v-btn text :to="{ name: 'find.boss.selection' }">Find</v-btn>
        <v-btn text :to="{ name: 'host.boss.selection' }">Host</v-btn>
      </div>
      <div class="d-none d-md-block">
        <router-view name="app-bar-content"></router-view>
      </div>
      <user-profile />
    </v-app-bar>

    <v-main>
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
    MessageCard: () => import("@/components/MessageCard.vue")
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    ...mapGetters(["unreadMessages", "currentAccount"]),
    onHomePage(): boolean {
      return false;
    }
  }
});
</script>

<style>
.rs-background {
  background: url(https://www.runescape.com/img/rs3/global/header_bg_set.jpg)
      no-repeat left top,
    url(https://www.runescape.com/img/rs3/global/header_bg_set.jpg) no-repeat
      right center,
    url(https://www.runescape.com/img/rs3/global/header_bg_set.jpg) repeat-x
      center bottom !important;
}

.v-toolbar__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
}
.v-toolbar__content > div > a {
  margin-right: 12px;
}
.v-chip + .v-chip {
  margin-left: 0.5rem;
}
</style>