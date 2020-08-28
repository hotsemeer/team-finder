<template>
  <v-list dense nav>
    <v-list-item v-for="(link, index) in links" :key="index" :href="link.url" target="_blank">
      <v-list-item-icon>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ link.label }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        {
          url: "https://discordapp.com/users/202030560418201600",
          icon: "$vuetify.icons.discord",
          label: "Hotse | Creator",
        },
        {
          url: "https://discord.com/oauth2/authorize?client_id=747858383607955476&scope=bot",
          icon: "$vuetify.icons.discord",
          label: "Team finder bot",
        },
        {
          url: "https://discord.gg/6djqFVN",
          icon: "$vuetify.icons.discord",
          label: "PVM Encyclopedia",
        },
        {
          url: "https://reddit.com/r/runescape",
          icon: "$vuetify.icons.reddit",
          label: "r/runescape",
        },
        {
          url: "https://reddit.com/r/RS3Ironmen",
          icon: "$vuetify.icons.reddit",
          label: "r/RS3Ironmen",
        },
      ],
    };
  },
})
</script>