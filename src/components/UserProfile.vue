<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">
        <v-icon class="mr-2">{{ selectedAccount.type.icon }}</v-icon>
        <v-toolbar-title class="d-none d-md-block">{{ selectedAccount.username }}</v-toolbar-title>
      </v-btn>
    </template>

    <v-list shaped>
      <v-list-item @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-list-item-icon>
          <transition name="fade" mode="out-in">
            <v-icon key="dark-icon" v-if="$vuetify.theme.dark">brightness_3</v-icon>
            <v-icon key="light-icon" v-else color="yellow darken-2">wb_sunny</v-icon>
          </transition>
        </v-list-item-icon>
          <v-list-item-title>{{ $vuetify.theme.dark ? 'Dark' : 'Light'}} mode</v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item-group v-model="selectedAccountIndex">
        <v-list-item
          v-for="(account, index) in $store.state.user.accounts"
          :key="index"
          @click="changeAccount(index)"
        >
          <v-list-item-icon>
            <v-icon>{{ account.type.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ account.username }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>

      <v-list-item @click.stop="newAccount">
        <v-list-item-icon>
          <v-icon>add</v-icon>
        </v-list-item-icon>Add account
      </v-list-item>
    </v-list>

    <new-account-dialog v-if="dialog" v-model="dialog" />
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';
import RunescapeAccount from '@/classes/RunescapeAccount';

export default Vue.extend({
  components: {
    newAccountDialog: () => import('@/components/NewAccountDialog.vue'),
  },
  data() {
    return {
      dialog: false,
      selectedAccountIndex: this.$store.state.currentAccountIndex,
    };
  },
  computed: {
    selectedAccount(): RunescapeAccount {
      return this.$store.getters.currentAccount;
    },
  },
  methods: {
    newAccount(): void {
      this.dialog = true;
    },
    changeAccount(index: number): void {
      this.$store.commit('selectAccount', index);
    },
  },
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>