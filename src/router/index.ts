import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useGlobalStore } from "@/stores/global";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/MineView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/signIn",
    name: "signIn",
    component: () => import("../views/SignInView.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("../views/SignUpView.vue"),
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth && !(await getCurrentUser())) {
    return {
      path: "/",
      query: { redirect: to.fullPath },
    };
  }
});

router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser();

  if (user && (to.name === "signIn" || to.name === "signUp")) {
    next("/");
  } else {
    next();
  }
});

export default router;
