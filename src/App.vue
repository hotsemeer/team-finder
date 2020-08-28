<template>
  <v-app>
    <v-app-bar app dark v-if="selectedAccount">
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
      <v-speed-dial bottom right absolute fixed v-model="open" direction="left">
        <template v-slot:activator>
          <v-btn v-model="open" color="blue darken-2" dark fab>
            <v-icon v-if="open">mdi-close</v-icon>
            <v-badge v-else left color="indigo" :content="2" :value="2">
              <v-icon>message</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <message-card style="margin-bottom: 100%;" />
      </v-speed-dial>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import RunescapeAccount from "@/classes/RunescapeAccount";

export default Vue.extend({
  components: {
    UserProfile: () => import('@/components/UserProfile.vue'),
    MessageCard: () => import('@/components/MessageCard.vue'),
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    selectedAccount(): RunescapeAccount | null {
      return this.$store.getters.currentAccount;
    },
  },
});
</script>

<style>
.rs-background {
  background: url("./assets/background-rs.jpg") repeat 0 0 !important;
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