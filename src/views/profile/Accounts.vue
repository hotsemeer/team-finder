<template>
  <v-tabs :vertical="!$vuetify.breakpoint.mobile">
    <v-tab v-for="account in $store.getters.accounts" :key="account.id">
      <v-icon left>{{ account.type.icon }}</v-icon>
      {{ account.username }}
    </v-tab>

    <v-tab-item v-for="account in $store.getters.accounts" :key="account.id">
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header>Unlocks</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div :style="$vuetify.breakpoint.mobile ? 'font-size: 20px' : ''">
              <div v-for="(unlock, index) in unlocks" :key="index" @click="unlock.unlocked = !unlock.unlocked">
                <v-fab-transition mode="out-in">
                  <template>
                    <v-icon v-if="!unlock.unlocked" key="add" left>mdi-plus</v-icon>
                    <v-icon v-else color="success" key="check" left>mdi-check</v-icon>
                  </template>
                </v-fab-transition>
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
            <equipment-picker
              :combat-style="style"
              class="mb-10"
            ></equipment-picker>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-tab-item>

    <v-tab>
      <v-icon left>mdi-plus</v-icon>
      New account
    </v-tab>

    <v-tab-item>
      <new-account-card />
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  components: {
    EquipmentPicker: () => import("@/components/EquipmentPicker.vue"),
    NewAccountCard: () => import("@/components/NewAccountDialog.vue"),
  },
  data() {
    return {
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
