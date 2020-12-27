<template>
  <v-container fluid class="d-flex align-center flex-column">
    <profile-summary class="mb-10"></profile-summary>
    <v-expansion-panels v-if="$vuetify.breakpoint.mobile" accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>Unlocks</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div :style="$vuetify.breakpoint.mobile ? 'font-size: 20px' : ''">
            <div v-for="(unlock, index) in unlocks" :key="index">
              <v-icon color="success" key="check" left>mdi-check</v-icon>
              <span>{{ unlock.name }}</span>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel
        v-for="style in ['Ranged', 'Magic', 'Melee']"
        :key="style"
      >
        <v-expansion-panel-header>{{ style }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <equipment-grid
            :gear="gear[style]"
            class="mb-10 justify-center"
          ></equipment-grid>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Stats</v-expansion-panel-header>
        <v-expansion-panel-content>
          <stats-list></stats-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row v-else class="fill-width">
      <v-col style="font-size: 20px" tag="ul" class="unlock-list">
        <li v-for="(unlock, index) in unlocks" :key="index">
          <v-icon color="success" key="check" left>mdi-check</v-icon>
          <span>{{ unlock.name }}</span>
        </li>
      </v-col>
      <v-col v-for="style in ['Ranged', 'Magic', 'Melee']"
        :key="style">
        <h1>{{ style }}</h1>
        <equipment-grid
          :gear="gear[style]"
          class="mb-10 justify-center"
        ></equipment-grid>
      </v-col>
      <v-col>
        <stats-list loading></stats-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileSummary from "@/components/ProfileSummary.vue";
import EquipmentGrid from "@/components/EquipmentGrid.vue";
import StatsList from '@/components/StatsList.vue';

export default {
  components: { ProfileSummary, EquipmentGrid, StatsList },
  props: {
    username: String,
  },
  data() {
    return {
      gear: {
        Melee: {
          Headgear: null,
          Body: null,
          Legs: null,
          Boots: null,
          Gloves: "Melee/Bandos_gloves",
          Amulet: null,
          Ring: null,
          Back: null,
          Mainhand: null,
          Offhand: null,
        },
        Ranged: {
          Headgear: null,
          Body: null,
          Legs: null,
          Boots: null,
          Gloves: "Melee/Bandos_gloves",
          Amulet: null,
          Ring: null,
          Back: null,
          Mainhand: null,
          Offhand: null,
        },
        Magic: {
          Headgear: null,
          Body: null,
          Legs: null,
          Boots: null,
          Gloves: "Melee/Bandos_gloves",
          Amulet: null,
          Ring: null,
          Back: null,
          Mainhand: null,
          Offhand: null,
        },
      },
      unlocks: [
        { name: "Ancient prayers", unlocked: false },
        { name: "Malevolence", unlocked: false },
        { name: "Desolation", unlocked: false },
        { name: "Affliction", unlocked: false },
        { name: "Erethdor's Grimoire", unlocked: false },
        { name: "Ring of vigour", unlocked: false },
        { name: "Fury of the Small", unlocked: false },
        { name: "Berserker's Fury", unlocked: false },
        { name: "Onslaught", unlocked: false },
        { name: "Reprisal", unlocked: false },
        { name: "Corruption Blast", unlocked: false },
        { name: "Corruption Shot", unlocked: false },
        { name: "Limitless", unlocked: false },
        { name: "Rune pouch", unlocked: false },
        { name: "Greater Ricochet", unlocked: false },
      ],
    };
  },
};
</script>

<style scoped>
.unlock-list {
  list-style-type: none;
}
</style>
