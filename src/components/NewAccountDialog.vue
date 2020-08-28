<template>
  <v-dialog :value="value" @input="$emit('input', $event)">
    <v-card>
      <v-card-title>New account</v-card-title>

      <v-divider />

      <v-card-text class="mt-2">
        <v-form v-model="valid">
          <v-subheader class="pa-0">Accounttype</v-subheader>
          <v-btn-toggle v-model="selectedButton" mandatory borderless group class="row">
            <v-col v-for="(type, index) in $store.state.accountTypes" :key="index" cols="12" sm="3" md="2" lg="1">
              <v-btn text x-large>
                <v-icon>{{ type.icon }}</v-icon>
                {{ type.name }}
              </v-btn>
            </v-col>
          </v-btn-toggle>
          <v-text-field
            v-model="account.username"
            label="Username"
            :rules="[rules.required, rules.username]"
          >Username</v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text @click="$emit('input', false)">Close</v-btn>
        <v-btn color="primary" text :disabled="!valid" @click="saveAccount">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import RunescapeAccount from '@/classes/RunescapeAccount';

export default Vue.extend({
  props: {
    value: Boolean
  },
  data() {
    return {
      account: new RunescapeAccount(),
      rules: {
        required: (value: string) => !!value || "Required",
        username: (value: string) =>
          RegExp("^[a-zA-Z0-9 ]{1,12}$", "g").test(value) ||
          `${value} is not a valid username`,
      },
      valid: false,
      selectedButton: undefined,
    };
  },
  watch: {
    selectedButton(val: number): void {
      this.account.type = this.$store.state.accountTypes[val];
    },
  },
  methods: {
    saveAccount(): void {
      this.$store.commit("addAccount", this.account);
      this.$store.commit("selectNewestAccount");
      this.$emit('input', false);
    },
  }
})
</script>