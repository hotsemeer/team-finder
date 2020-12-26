<template>
  <v-card :width="$vuetify.breakpoint.mobile ? '100%' : '300px'" :flat="flat">
    <div class="d-flex flex-no-wrap justify-space-between align-center">
      <v-avatar v-if="!small" class="ma-3" :size="$vuetify.breakpoint.mobile ? 50 : 125" tile>
        <v-icon class="text-h2" :color="color">mdi-{{ icon }}</v-icon>
      </v-avatar>
      <div style="flex-grow: 0.75;">
        <v-card-title class="headline">{{ name }}</v-card-title>
        <v-card-subtitle>{{ description }}</v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: 'trophy' },
    name: String,
    description: String,
    flat: Boolean,
    small: Boolean,
    color: String
  }
}
</script>
