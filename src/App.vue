<script setup lang="ts">
// https://ithelp.ithome.com.tw/articles/10336751

import TheHeader from "@/components/TheHeader.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
</script>

<template>
  <TheHeader />
  <router-view />
</template>

<style lang="scss">
@import "@/assets/scss/root.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
