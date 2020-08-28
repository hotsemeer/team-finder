<template>
  <v-stepper :value="step" @change="$router.replace({ query: { s: $event}})" class="fill-height">
    <v-stepper-step :complete="!!account.type" editable step="1">
      Select gamemode
      <small v-if="account.type">{{ account.type.name }}</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <div class="text-center overline text-h3 mb-5">I am a</div>
      <div>
        <v-btn
          v-for="(type, index) in $store.state.accountTypes"
          :key="index"
          block
          tile
          x-large
          text
          @click="account.type = type"
          :to="{ query: { s: step + 1 } }"
          class="col my-3"
        >
          <v-icon>{{ type.icon }}</v-icon>
          {{ type.name }}
        </v-btn>
      </div>
    </v-stepper-content>

    <v-stepper-step :complete="!!account.username" editable step="2">
      Set username
      <small v-if="account.username">{{ account.username }}</small>
    </v-stepper-step>
    <v-stepper-content step="2">
      <v-form @submit.prevent="$router.push({ query: { s: step + 1 } })">
        <v-text-field v-model="account.username" label="Username" @input="lookup">Username</v-text-field>
        <v-btn
          block
          tile
          x-large
          text
          :disabled="!account.username"
          :to="{ query: { s: step + 1 } }"
          class="col my-3"
        >
          Next
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-form>
    </v-stepper-content>

    <v-stepper-step step="3">Boss</v-stepper-step>
    <v-stepper-content step="3">
      <div class="text-center overline text-h3 mb-5">I am</div>
      <div>
        <v-btn block tile x-large text @click="addAccount('find')" class="col my-3">Looking for a team</v-btn>
        <v-btn block tile x-large text @click="addAccount('host')" class="col my-3">Hosting a team</v-btn>
      </div>
    </v-stepper-content>
  </v-stepper>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import RunescapeAccount from "@/classes/RunescapeAccount";

export default Vue.extend({
  props: {
    step: Number,
  },
  created() {
    if (this.step > 1 && this.account.type === null) {
      this.$router.replace({ query: { s: "1" } });
    }
    if (this.step > 2 && this.account.username === "") {
      this.$router.replace({ query: { s: "2" } });
    }
  },
  data() {
    return {
      account: new RunescapeAccount(),
    };
  },
  methods: {
    lookup(username: String) {
      // const url = `https://secure.runescape.com/`;
      // const http = axios.create({
      //   baseURL: url,
      // });
      // http.get(`m=hiscore/index_lite.ws?player=${username}`).then((result) => {
      //   console.log(result);
      // });
    },
    addAccount(route: String): void {
      this.$store.commit("addAccount", this.account);
      this.$store.commit("selectNewestAccount");
      this.$router.push({ name: `${route}.boss.selection` });
    },
  },
});
</script>