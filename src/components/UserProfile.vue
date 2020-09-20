<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" style="height: inherit !important;">
        <v-icon class="mr-2">
          <!-- <v-badge left color="indigo" :content="1" :value="1"></v-badge> -->
          {{ selectedAccount.type.icon }}
        </v-icon>
        <span>{{ selectedAccount.username }}</span>
      </v-btn>
    </template>

    <v-list shaped>
      <v-list-item @click.stop="open = true">
        <v-list-item-icon>
          <v-icon>message</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Messages</v-list-item-title>
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

    <v-dialog
      v-model="open"
      :fullscreen="$vuetify.breakpoint.mobile"
      :max-width="$vuetify.breakpoint.mobile ? 1000 : 500"
    >
      <message-card @close="open = false" />
    </v-dialog>
    <new-account-dialog v-if="dialog" v-model="dialog" />
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";
import RunescapeAccount from "@/classes/RunescapeAccount";

export default Vue.extend({
  components: {
    newAccountDialog: () => import("@/components/NewAccountDialog.vue"),
    MessageCard: () => import("@/components/MessageCard.vue"),
  },
  data() {
    return {
      dialog: false,
      selectedAccountIndex: this.$store.state.currentAccountIndex,
      open: false,
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
      this.$store.commit("selectAccount", index);
    },
  },
});
</script>

<style scoped>
</style>