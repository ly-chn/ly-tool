<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer>

    <v-app-bar app density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="app-title">ly-tool</span>
      </v-toolbar-title>
      <tool-bar/>
    </v-app-bar>

    <v-main>
      <router-view #default="{ Component, route }">
        <transition appear mode="out-in" name="fade-slide">
          <!--     :include="getCaches"      -->
          <keep-alive>
            <component :is="Component" :key="route.fullPath"/>
          </keep-alive>
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import ToolBar from '/@/layouts/page-layout/tool-bar.vue'

const name = 'PageLayout'
import { computed, ref } from 'vue'

const drawer = ref(false)

const getTabsState = computed(() => {
  // return tabStore.getTabList.filter((item) => !item.meta?.hideTab);
  return []
})
</script>


