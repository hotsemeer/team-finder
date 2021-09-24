<template>
  <v-tabs :vertical="!$vuetify.breakpoint.mobile">
    <v-tab v-for="account in $store.getters.accounts" :key="account.id">
      <v-icon left>{{ account.type.icon }}</v-icon>
      {{ account.username }}
    </v-tab>

    <v-tab-item v-for="account in $store.getters.accounts" :key="account.id">
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header>Unlocks ({{amountUnlocked}}/{{ totalUnlocks }})</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <div v-for="(unlock, index) in unlocks" class="unlock col-6" :class="unlock.unlocked ? 'unlocked' : ''" :key="index" @click="unlock.unlocked = !unlock.unlocked">
                <v-img :src="require(`@/assets/unlocks/${unlock.image}`)" width="50px" class="mb-2" style="flex: 0 0 auto;"></v-img>
                <span>{{ unlock.name }}</span>
              </div>
            </v-row>
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
        { name: "Ancient prayers", unlocked: false, image: 'Turmoil.png' },
        { name: "Malevolence", unlocked: false, image: 'Malevolence.png' },
        { name: "Desolation", unlocked: false, image: 'Desolation.png' },
        { name: "Affliction", unlocked: false, image: 'Affliction.png' },
        { name: "Erethdor's Grimoire", unlocked: false, image: 'Erethdor\'s_grimoire.png' },
        { name: "Ring of vigour", unlocked: false, image: 'Ring_of_vigour.png' },
        { name: "Fury of the Small", unlocked: false, image: 'Fury_of_the_Small.png' },
        { name: "Berserker's Fury", unlocked: false, image: 'Berserker\'s_Fury.png' },
        { name: "Onslaught", unlocked: false, image: 'Onslaught.png' },
        { name: "Reprisal", unlocked: false, image: 'Reprisal.png' },
        { name: "Corruption Blast", unlocked: false, image: 'Corruption_Blast.png' },
        { name: "Corruption Shot", unlocked: false, image: 'Corruption_Shot.png' },
        { name: "Limitless", unlocked: false, image: '45px-Limitless.png' },
        { name: "Rune pouch", unlocked: false, image: 'Sealed_large_rune_pouch.png' },
        { name: "Greater Ricochet", unlocked: false, image: 'Greater_Ricochet.png' },
      ],
    };
  },
  computed: {
    amountUnlocked() {
      return this.unlocks.filter(u => u.unlocked).length
    },
    totalUnlocks() {
      return this.unlocks.length
    }
  }
};
</script>

<style lang="scss" scoped>
.unlock {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #CC0000;
  margin: 10px;
  padding: 10px;
  max-width: 120px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &.unlocked {
    background-color: #6AA84F;
  }
}
</style>
