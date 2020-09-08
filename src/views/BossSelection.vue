<template>
  <div class="pa-0 pa-md-5">
    <v-sheet outlined rounded class="d-flex justify-center ma-5">
      <search-bar />
    </v-sheet>

    <v-sheet outlined rounded class="d-flex justify-center ma-5 py-2">
      <v-btn-toggle multiple group color="purple darken-1" v-model="settings">
        <v-btn text class="mr-2" value="dense"><v-icon>open_in_full</v-icon>Dense</v-btn>
        <v-btn text value="favourited"><v-icon>star</v-icon>Favourites</v-btn>
      </v-btn-toggle>
    </v-sheet>

    <v-divider class="mb-3" />

    <transition-group name="list" tag="div" mode="out-in" class="boss-grid">
      <boss-card
        v-for="boss in bossesFiltered"
        :key="boss.id"
        :boss="boss"
        :to="{ name: `${preference}.boss`, params: { bossName: boss.name }}"
        :favourited="$store.state.favouriteBosses.includes(boss.id)"
        :dense="settings.includes('dense')"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Boss from '@/classes/Boss';

export default Vue.extend({
  components: {
    BossCard: () => import('@/components/BossCard.vue'),
    SearchBar: () => import('@/components/SearchBar.vue'),
  },
  props: {
    preference: String,
    search: String
  },
  data() {
    return {
      settings: ['']
    }
  },
  computed: {
    bossesFiltered(): Boss[] {
      return this.$store.state.bosses.filter(this.bossFilter);
    }
  },
  methods: {
    bossFilter(boss: Boss): boolean {
      if (
        this.settings.includes('favourited') &&
        !this.$store.state.favouriteBosses.includes(boss.id)
      ) {
        return false;
      }

      const checkItems = [boss.name, ...boss.tags].map(t => t.toLowerCase());

      return checkItems.some((i: string) =>
        i.includes(this.search.toLowerCase())
      );
    }
  }
});
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}

.boss-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: center;
  gap: 10px 10px;
}
</style>