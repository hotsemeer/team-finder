<template>
  <v-speed-dial v-model="editing" direction="right" transition="slide-x-transition">
    <template v-slot:activator>
      <v-hover v-slot:default="{ hover }">
        <v-img
          :src="require(`@/assets/Equipment/Slots/${value ? 'Empty' : slotType}.png`)"
          aspect-ratio="1"
          class="d-flex align-center justify-center"
        >
          <v-img
            v-if="value"
            max-height="35px"
            max-width="35px"
            :src="require(`@/assets/Equipment/${slotType}/${value}.png`)"
          ></v-img>

          <v-expand-transition>
            <div v-if="hover || editing" class="hover-icon" style>
              <v-icon>{{ editing ? 'clear' : 'edit'}}</v-icon>
            </div>
          </v-expand-transition>
        </v-img>
      </v-hover>
    </template>

    <div>
      <div
        v-for="option in options"
        :key="option"
        cols="1"
        @click.prevent="select(option)"
        class="orange rounded-circle ml-2"
        style="width:50px; height: 50px;"
      >
        <v-img
          aspect-ratio="1"
          height="40px"
          class="pa-2"
          contain
          :src="require(`@/assets/Equipment/${slotType}/${option}.png`)"
        ></v-img>
      </div>
    </div>
  </v-speed-dial>
</template>

<script>
export default {
  props: {
    slotType: String,
    value: String,
    options: Array,
  },
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    select(gear) {
      this.$emit("input", gear);
    },
  },
};
</script>

<style scoped lang="scss">
div:hover {
  cursor: pointer;
}

.hover-icon {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  z-index: 2;
  display: flex;
  align-content: center;
  justify-content: center;
  top: 0;
  left: 0;

  > i {
    color: #ffffff !important;
    caret-color: #ffffff !important;
  }
}
</style>