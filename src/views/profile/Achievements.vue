<template>
  <v-container fluid  :class="$vuetify.breakpoint.mobile ? '' : 'pa-10'">
    <div class="d-flex justify-center">
      <v-card
        outlined
        class="mb-3"
        max-width="500px"
        style="border-width: 2px;"
        :style="`border-color: ${rankColour};`"
      >
        <v-responsive :aspect-ratio="16 / 9">
          <div
            class="d-flex flex-no-wrap justify-space-between align-center fill-height"
          >
            <div>
              <v-card-title>Tepel lepel</v-card-title>
              <v-card-subtitle
                >Rank <strong :style="`color: ${rankColour};`">{{ rank }}</strong> with
                <strong>{{ totalPoints }}</strong> points</v-card-subtitle
              >
            </div>
            <div>
              <span class="mb-2">Last achievement:</span>
              <achievement-card v-bind="achievements[0]" flat :small="$vuetify.breakpoint.mobile" />
            </div>
          </div>
        </v-responsive>
      </v-card>
    </div>

    <h2 class="mb-2">Unlocked</h2>
    <v-row dense class="mb-5">
      <achievement-card v-for="achievement in accomplished" :key="achievement.id" v-bind="achievement" color="success" class="mb-5" :class="$vuetify.breakpoint.mobile ? '' : 'mr-5'"></achievement-card>
    </v-row>

    <div v-if="remaining.length > 0">
      <h2 class="mb-2">Remaining</h2>
      <v-row dense>
        <achievement-card v-for="achievement in remaining" :key="achievement.id" v-bind="achievement" class="mb-5" :class="$vuetify.breakpoint.mobile ? '' : 'mr-5'"></achievement-card>
      </v-row>
    </div>
    <div v-else class="text-center">
      <h2>Well done, you've achieved everything there is to achieve!</h2>
      <v-icon color="deep-purple" class="text-h2">mdi-party-popper</v-icon>
    </div>
  </v-container>
</template>

<script>
import AchievementCard from "@/components/AchievementCard.vue";

export default {
  components: {
    AchievementCard,
  },
  data() {
    return {
      achievements: [
        {
          id: 1,
          name: "Hosting I",
          description: "Host a team 5 times.",
          points: 200,
        },
        {
          id: 3,
          name: "Hosting II",
          description: "Host a team 10 times.",
          points: 200,
        },
        {
          id: 3,
          name: "Hosting II",
          description: "Host a team 10 times.",
          points: 200,
        },
        {
          id: 3,
          name: "Hosting II",
          description: "Host a team 10 times.",
          points: 200,
        },
        {
          id: 3,
          name: "Hosting II",
          description: "Host a team 10 times.",
          points: 200,
        },
        {
          id: 3,
          name: "Hosting II",
          description: "Host a team 10 times.",
          points: 200,
        },
        {
          id: 3,
          name: "Hosting II",
          description: "Host a team 10 times.",
          points: 200,
        },
      ],
      accomplishedIds: [1, 2],
      totalPoints: 1300,
      rank: 76,
      totalUsers: 100,
    };
  },
  computed: {
    rankColour() {
      const percentile = (this.rank / this.totalUsers) * 100;
      if (percentile <= 1) {
        return "#B71C1C";
      } else if (percentile <= 10) {
        return "#7B1FA2";
      } else if (percentile <= 25) {
        return "#0288D1";
      } else if (percentile <= 50) {
        return "#FFAB00";
      } else if (percentile <= 75) {
        return "#BDBDBD";
      } else {
        return "#6D4C41";
      }
    },
    accomplished() {
      return this.achievements.filter((a) =>
        this.accomplishedIds.includes(a.id)
      );
    },
    remaining() {
      return this.achievements.filter(
        (a) => !this.accomplishedIds.includes(a.id)
      );
    },
  },
};
</script>
