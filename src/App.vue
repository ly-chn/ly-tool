<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ly-tool</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const drawer = ref(false)

</script>
