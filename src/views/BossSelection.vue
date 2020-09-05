<template>
  <div class="pa-0 pa-md-5">
    <div class="d-flex justify-center">
      <v-switch label="Show favourited" inset v-model="showFavourited">Favourited</v-switch>
    </div>

    <v-divider class="mb-3" />

    <transition-group name="card-grid" tag="div" class="boss-grid">
      <boss-card
        v-for="(boss, index) in bossesFiltered"
        :key="index"
        :boss="boss"
        :to="{ name: `${preference}.boss`, params: { bossName: boss.name }}"
        :favourited="$store.state.favouriteBosses.includes(boss.id)"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Boss from "@/classes/Boss";

export default Vue.extend({
  components: {
    BossCard: () => import("@/components/BossCard.vue")
  },
  props: {
    preference: String,
    search: String
  },
  data() {
    return {
      showFavourited: false
    };
  },
  computed: {
    bossesFiltered(): Boss[] {
      return this.$store.state.bosses.filter(this.bossFilter);
    }
  },
  methods: {
    bossFilter(boss: Boss): boolean {
      if (
        this.showFavourited &&
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

<style scoped>
.card-grid-enter,
.card-grid-leave-to {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.5s;
}

.boss-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: center;
  gap: 10px 10px;
}
</style>