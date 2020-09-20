<template>
  <v-list-item @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
    <v-list-item-icon>
      <transition name="fade" mode="out-in">
        <v-icon key="light-icon" v-if="$vuetify.theme.dark" color="yellow darken-2">wb_sunny</v-icon>
        <v-icon key="dark-icon" v-else>brightness_3</v-icon>
      </transition>
    </v-list-item-icon>
    <v-list-item-title>{{ $vuetify.theme.dark ? 'Light' : 'Dark'}} mode</v-list-item-title>
  </v-list-item>
</template>