<template>
  <div class="header">
    <p>isLogin: {{ global.isLoggedIn }}</p>
    <p>Uid: {{ global.isUser.uid }}</p>
    <p>Email: {{ global.isUser.email }}</p>
    <nav>
      <router-link to="/">首頁</router-link>
      <router-link to="/mine" v-if="global.isLoggedIn">我的</router-link>
      <router-link to="/signIn" v-if="!global.isLoggedIn">登入</router-link>
      <router-link to="/signUp" v-if="!global.isLoggedIn">註冊</router-link>
    </nav>
    <button
      type="button"
      @click="global.handleSignOut"
      v-if="global.isLoggedIn"
    >
      登出
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useGlobalStore } from "@/stores/global";

const global = useGlobalStore();
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.header {
  padding: rem(10);
  background-color: var(--primary);

  p {
    color: var(--color-white);
  }
}

nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;

  a {
    font-weight: bold;
    color: var(--color-white);

    &.router-link-exact-active {
      color: var(--secondary);
    }
  }
}
</style>
