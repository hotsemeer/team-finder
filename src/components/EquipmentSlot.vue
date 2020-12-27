<template>
  <v-img
    :src="require(`@/assets/Equipment/Slots/${value ? 'Empty' : slotType}.png`)"
    aspect-ratio="1"
    class="d-flex align-center justify-center pa-2"
  >
    <v-img
      v-if="value"
      :src="require(`@/assets/Equipment/${slotType}/${value}.png`)"
    ></v-img>
  </v-img>
</template>

<script>
export default {
  props: {
    slotType: String,
    value: String,
  },
};
</script>
