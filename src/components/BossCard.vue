<template>
  <v-card class="pa-0 d-flex flex-no-wrap justify-space-between" min-width="200" max-width="400" outlined :to="to">
    <div>
      <v-card-title class="headline pr-0" style="word-break: break-word !important;" v-text="boss.name"></v-card-title>
      <v-card-actions>
        <v-chip v-if="boss.combat_level" color="red" text-color="white">Lvl. {{ boss.combat_level }}</v-chip>
        <v-chip v-for="tag in boss.tags" :key="tag" color="green" text-color="white">{{ tag }}</v-chip>
      </v-card-actions>
    </div>

    <div style="height: 180px; width: 100px;" class="d-flex justify-center align-center">
      <v-img :src="require(`@/assets/bosses/${boss.image}`)" width="100" max-height="180" contain />
    </div>
    <v-btn icon @click.prevent="toggleFavourite" class="mt-2 mr-2">
      <v-icon v-if="favourited" color="yellow darken-3" large>star</v-icon>
      <v-icon v-else large>star_outline</v-icon>
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    boss: { type: Object, required: true },
    to: Object,
    favourited: Boolean
  },
  methods: {
    toggleFavourite(): void {
      this.$store.commit('toggleFavouriteBoss', this.boss.id)
    }
  }
})
</script>