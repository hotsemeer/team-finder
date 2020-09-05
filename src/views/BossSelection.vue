<template>
  <div class="pa-0 pa-md-5">
    <div class="d-flex justify-center">
      <v-switch label="Show favourited" inset v-model="showFavourited">Favourited</v-switch>
    </div>

    <v-divider />

    <transition-group name="card-list" tag="div" class="row mx-2">
      <v-col
        v-for="(boss, index) in bossesFiltered"
        :key="index"
        class="justify-center"
        cols="12"
        sm="6"
        lg="3"
        xl="2"
      >
        <boss-card
          :boss="boss"
          :key="boss.id"
          :to="{ name: `${preference}.boss`, params: { bossName: boss.name }}"
          :favourited="$store.state.favouriteBosses.includes(boss.id)"
        />
      </v-col>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Boss from '@/classes/Boss';

export default Vue.extend({
  components: {
    BossCard: () => import('@/components/BossCard.vue'),
  },
  props: {
    preference: String,
    search: String,
  },
  data() {
    return {
      showFavourited: false,
    };
  },
  computed: {
    bossesFiltered(): Boss[] {
      return this.$store.state.bosses.filter(this.bossFilter);
    },
  },
  methods: {
    bossFilter(boss: Boss): boolean {
      if (
        this.showFavourited &&
        !this.$store.state.favouriteBosses.includes(boss.id)
      ) {
        return false;
      }

      const checkItems = [boss.name, ...boss.tags].map((t) => t.toLowerCase());

      return checkItems.some((i: string) =>
        i.includes(this.search.toLowerCase()),
      );
    },
  },
});
</script>

<style scoped>
.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.5s;
}

.card-list-enter,
.card-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>