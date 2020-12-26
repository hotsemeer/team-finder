<template>
  <v-speed-dial class="dial" v-model="editing" direction="right">
    <template v-slot:activator>
      <v-hover v-slot:default="{ hover }">
        <v-img
          :src="
            require(`@/assets/Equipment/Slots/${
              value ? 'Empty' : slotType
            }.png`)
          "
          aspect-ratio="1"
          class="d-flex align-center justify-center pa-2"
        >
          <v-img
            v-if="value"
            :src="require(`@/assets/Equipment/${slotType}/${value}.png`)"
          ></v-img>

          <v-expand-transition>
            <div v-if="hover || editing" class="hover-icon" style>
              <v-icon>{{ editing ? "clear" : "edit" }}</v-icon>
            </div>
          </v-expand-transition>
        </v-img>
      </v-hover>
    </template>

    <div
      v-for="option in options"
      :key="option"
      @click.prevent="select(option)"
      class="rotary-list-item"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-img
            v-bind="attrs"
            v-on="on"
            aspect-ratio="1"
            height="100%"
            width="100%"
            contain
            :src="require(`@/assets/Equipment/${slotType}/${option}.png`)"
          ></v-img>
        </template>
        <!-- <span>{{ filenameToDisplayableText(option) }}</span> -->
        <a href="https://runescape.wiki/w/Blightbound_crossbow">{{filenameToDisplayableText(option)}}</a>
      </v-tooltip>
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
    filenameToDisplayableText(string) {
      const parts = string.split("/");
      return parts[parts.length - 1].replace(/_/g, " ");
    },
  },
};
</script>

<style scoped lang="scss">
div:hover {
  cursor: pointer;
}

.theme--dark .rotary-list-item {
  background-color: #fff;
}

@keyframes fade-in {
  100% {
    opacity: 1;
  }
}

.rotary-list-item {
  width: 50px;
  height: 50px;
  padding: 8px;
  border-radius: 50%;
  background-color: #CFD8DC;
  border: 1px solid #616161;
  opacity: 0;
  animation: fade-in 1s linear;
  animation-fill-mode: forwards;
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
  bottom: 0;
  left: 0;

  > i {
    color: #ffffff !important;
    caret-color: #ffffff !important;
  }
}

.dial {
  z-index: inherit !important;
}

* ::v-deep .v-speed-dial__list {
  width: 100%;
  left: 0 !important;
  padding: 0px !important;
  z-index: 10;
  display: inline-block;
  > * {
    position: absolute;
  }

  @for $i from 1 through 8 {
    > *:nth-child(#{$i}) {
      animation-delay: $i * 50ms;
    }
  }

  @for $i from 9 through 24 {
    > *:nth-child(#{$i}) {
      animation-delay: ($i - 8) * 50ms;
    }
  }

  // First circle
  > *:nth-child(1) {
    left: 75px;
    bottom: 0px;
  }

  > *:nth-child(2) {
    left: 60px;
    bottom: -60px;
  }

  > *:nth-child(3) {
    left: 0px;
    bottom: -75px;
  }

  > *:nth-child(4) {
    left: -60px;
    bottom: -60px;
  }

  > *:nth-child(5) {
    left: -75px;
    bottom: 0px;
  }

  > *:nth-child(6) {
    left: -60px;
    bottom: 60px;
  }

  > *:nth-child(7) {
    left: 0px;
    bottom: 75px;
  }

  > *:nth-child(8) {
    left: 60px;
    bottom: 60px;
  }

  // Second circle

  > *:nth-child(9) {
    left: 120px;
    bottom: -50px;
  }

  > *:nth-child(10) {
    left: 50px;
    bottom: -120px;
  }

  > *:nth-child(11) {
    left: -50px;
    bottom: -120px;
  }

  > *:nth-child(12) {
    left: -120px;
    bottom: -50px;
  }

  > *:nth-child(13) {
    left: -120px;
    bottom: 50px;
  }

  > *:nth-child(14) {
    left: -50px;
    bottom: 120px;
  }

  > *:nth-child(15) {
    left: 50px;
    bottom: 120px;
  }

  > *:nth-child(16) {
    left: 120px;
    bottom: 50px;
  }

  > *:nth-child(17) {
    left: 145px;
    bottom: 0px;
  }

  > *:nth-child(18) {
    left: 105px;
    bottom: -105px;
  }

  > *:nth-child(19) {
    left: 0px;
    bottom: -145px;
  }

  > *:nth-child(20) {
    left: -105px;
    bottom: -105px;
  }

  > *:nth-child(21) {
    left: -145px;
    bottom: 0px;
  }

  > *:nth-child(22) {
    left: -105px;
    bottom: 105px;
  }

  > *:nth-child(23) {
    left: 0px;
    bottom: 145px;
  }

  > *:nth-child(24) {
    left: 105px;
    bottom: 105px;
  }
}
</style>
