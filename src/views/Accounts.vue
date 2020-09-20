<template>
  <v-expansion-panels mandatory flat focusable>
    <v-expansion-panel v-for="account in $store.getters.accounts" :key="account.id">
      <v-expansion-panel-header>
        <span>
          <v-icon>{{ account.type.icon }}</v-icon>
          {{ account.username }}
        </span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <equipment-picker
          v-for="style in ['Ranged', 'Magic', 'Melee']"
          :key="style"
          :combat-style="style"
          class="mb-10"
        ></equipment-picker>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  components: {
    EquipmentPicker: () => import("@/components/EquipmentPicker.vue"),
  },
  data() {
    return {};
  },
};
</script>