<template>
  <v-text-field
    ref="search"
    v-model="search"
    prepend-icon="search"
    single-line
    label="search"
    class="mt-4 px-4"
    style="max-width: 450px;"
  />
</template>

<script lang="ts">
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
  }
});
</script>