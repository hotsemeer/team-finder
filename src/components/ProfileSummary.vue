<template>
  <v-card
    outlined
    class="mb-3"
    max-width="500px"
    style="border-width: 2px"
    :style="`border-color: ${rankColour};`"
  >
    <v-responsive :aspect-ratio="16 / 9">
      <div
        class="d-flex flex-no-wrap justify-space-between align-center fill-height"
      >
        <div>
          <v-card-title>Tepel lepel</v-card-title>
          <v-card-subtitle
            >Rank
            <strong :style="`color: ${rankColour};`">{{ rank }}</strong> with
            <strong>{{ totalPoints }}</strong> points</v-card-subtitle
          >
        </div>
        <div v-if="lastAchievement">
          <span class="mb-2">Last achievement:</span>
          <achievement-card
            v-bind="lastAchievement"
            flat
            :small="$vuetify.breakpoint.mobile"
          />
        </div>
      </div>
    </v-responsive>
  </v-card>
</template>

<script>
import AchievementCard from "@/components/AchievementCard.vue";
export default {
  components: {
    AchievementCard,
  },
  data() {
    return {
      rank: 1,
      percentile: 0.1,
      totalPoints: 2000,
      lastAchievement: null,
    };
  },
  computed: {
    rankColour() {
      if (this.percentile <= 1) {
        return "#B71C1C";
      } else if (this.percentile <= 10) {
        return "#7B1FA2";
      } else if (this.percentile <= 25) {
        return "#0288D1";
      } else if (this.percentile <= 50) {
        return "#FFAB00";
      } else if (this.percentile <= 75) {
        return "#BDBDBD";
      } else {
        return "#6D4C41";
      }
    },
  },
};
</script>
