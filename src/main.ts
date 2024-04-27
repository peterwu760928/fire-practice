import { createApp } from "vue";
import { createPinia } from "pinia";
import { setupFirebase } from "@/services/firebase";
import App from "./App.vue";
import router from "./router";

setupFirebase;
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
