<template>
  <div>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="deep-purple"
    ></v-progress-linear>
    <div class="stats font-weight-bold amber--text">
      <div v-for="(level, skill) in stats" :key="skill" class="stat">
        <img
          :src="require(`@/assets/Skills/${capitalize(skill)}.png`)"
          width="30px"
        />
        <div class="fill-height d-flex">
          <span class="align-self-start text--darken-2">
            {{ level }}
          </span>
          <span class="align-self-center text-h4 grey--text">/</span>
          <span class="align-self-end text--darken-2">
            {{ level }}
          </span>
        </div>
      </div>
      <div class="total-level">
        <span>Total level:</span>
        <span>1234</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
  data() {
    return {
      stats: {
        attack: 1,
        constitution: 1,
        mining: 1,
        strength: 1,
        agility: 1,
        smithing: 1,
        defence: 1,
        herblore: 1,
        fishing: 1,
        ranged: 1,
        thieving: 1,
        cooking: 1,
        prayer: 1,
        crafting: 1,
        firemaking: 1,
        magic: 1,
        fletching: 1,
        woodcutting: 1,
        runecrafting: 1,
        slayer: 1,
        farming: 1,
        construction: 1,
        hunter: 1,
        summoning: 1,
        dungeoneering: 120,
        divination: 1,
        invention: 1,
        archaeology: 1,
      },
    };
  },
  methods: {
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.stats {
  display: grid;
  grid-template-rows: repeat(10, minmax(60px, 1fr));
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px;
  background-color: #40372a;
  font-family: "runescape";
  min-width: 150px;
  max-width: 350px;

  > .stat {
    background-color: #535351;
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  > .total-level {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    background-color: black;
    border: 1px solid grey;
  }
}
</style>
