<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters class="fill-height">
      <v-col cols="3" class="fill-height border-right">
        <v-list class="fill-height">
          <v-card class="mx-2" :to="{ name: 'profile.accounts' }">
            <v-row>
              <v-col cols="3" class="d-flex justify-center align-center">
                <v-icon style="font-size: 30px">{{ currentAccount.type.icon }}</v-icon>
              </v-col>
              <v-col cols="9">
                <v-card-title>{{ currentAccount.username }}</v-card-title>
                <v-card-subtitle>{{ currentAccount.type.name }}</v-card-subtitle>
              </v-col>
            </v-row>
          </v-card>
          <v-list-item :to="{ name: 'profile.settings' }">Settings</v-list-item>
          <v-list-item :to="{ name: 'profile.accounts' }">Accounts</v-list-item>
          <v-list-item :to="{ name: 'profile.messages' }">Messages</v-list-item>
        </v-list>
      </v-col>
      <v-col cols="9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["unreadMessages", "currentAccount"]),
  },
}
</script>

<style scoped>
.border-right {
  border-right: 1px solid #999999;
}
</style>