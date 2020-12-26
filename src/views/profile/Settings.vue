<template>
  <div>
    <v-sheet class="mb-5 pb-5" align>
      <v-subheader>General</v-subheader>
      <div>
        <dark-mode-toggle />
      </div>
    </v-sheet>

    <v-sheet class="mb-5 pb-5">
      <v-subheader>Account</v-subheader>

      <div class="setting-row">
        <v-icon left>mdi-email</v-icon>
        <span>hotsevdmeer@hotmail.com</span>
        <v-spacer></v-spacer>
        <v-icon>mdi-pencil</v-icon>
        <!-- <span>{{ this.$store.user.email }}</span> -->
      </div>

      <div class="setting-row">
        <v-icon left>mdi-lock</v-icon>
        <span>Change password</span>
        <v-spacer></v-spacer>
        <v-icon>mdi-pencil</v-icon>
      </div>

      <div class="setting-row">
        <v-icon left>mdi-fingerprint</v-icon>
        <span>2 Factor authentication</span>
        <v-spacer></v-spacer>
        <v-icon v-if="twoFAEnabled" color="success">mdi-check</v-icon>
        <v-icon v-else>mdi-plus</v-icon>
      </div>
    </v-sheet>

    <v-sheet class="mb-5 pb-5">
      <v-subheader>Notifications</v-subheader>

      <div class="setting-row select--dense">
        <span>Type</span>
        <v-spacer></v-spacer>
        <v-select :items="['None', 'Push notification', 'E-mail', 'All']" solo flat value="All"></v-select>
      </div>

      <div class="setting-row">
        <span>New messages</span>
        <v-spacer></v-spacer>
        <v-switch></v-switch>
      </div>

      <div class="setting-row">
        <span>Team available</span>
        <v-spacer></v-spacer>
        <v-switch></v-switch>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  components: {
    DarkModeToggle: () => import("@/components/DarkModeToggle"),
  },
  data() {
    return {
      twoFAEnabled: false
    }
  }
};
</script>

<style scoped lang="scss">
.setting-row {
  padding: 14px 8px;
  display: flex;
  align-items: center;
}

.setting-row:nth-child(odd) {
  background-color: rgba(230, 230, 230, 10);
}

.theme--dark .setting-row:nth-child(odd) {
  background-color: rgba(39, 39, 39, 10);
}

.select--dense ::v-deep {
  * {
    margin: 0px;
  }
  .v-text-field__details {
    display: none;
  }

  .v-select {
    max-width: 12em;
  }
}
</style>
