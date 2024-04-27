<template>
  <div class="content">
    <h3>註冊</h3>
    <input type="text" v-model="email" placeholder="email" />
    <input type="text" v-model="password" placeholder="password" />
    <p>{{ msg }}</p>
    <button v-on:click="signUp">Send</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const router = useRouter();
const email = ref("");
const password = ref("");
const msg: any = ref("");
const auth = getAuth();

const signUp = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      setTimeout(() => {
        router.push("/mine");
      }, 2000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      msg.value = errorCode + ", " + errorMessage;
    });
};
</script>

<style scoped lang="scss">
.content {
  padding: 10px;
  border: 1px solid #dddddd;
  background-color: #f5f5f5;
}
</style>
