<template>
  <v-autocomplete
    ref="search"
    v-model="search"
    :items="bossNames"
    clearable
    prepend-icon="search"
    single-line
    label="search"
    style="max-width: 450px;"
  />
</template>

<script lang="ts">
import Boss from '@/classes/Boss';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      search: this.$route.query.search || '',
    };
  },
  watch: {
    search(value: string): void {
      this.$router.replace({ query: { search: value } });
    },
  },
  computed: {
    bossNames(): string[] {
      return this.$store.state.bosses.map((b: Boss) => b.name)
    },
  },
  methods: {
    focus() {
      console.log('adsf')
      const search = this.$refs.search as Vue
      if (search) {
        const input = search.$el.querySelector('input') as HTMLElement
        console.log(input)
        input.focus()
      }
    }
  }
});
</script>