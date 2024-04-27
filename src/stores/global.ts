import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const useGlobalStore = defineStore("global", () => {
  const auth = getAuth();
  const isLoggedIn = ref(false);
  const isUser: any = ref("");

  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("已登出");
        isLoggedIn.value = false;
        router.push("/");
      })
      .catch((error) => {
        console.log("登出失敗", error);
      });
  };

  //判斷會員是否登入
  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      user
        ? ((isLoggedIn.value = true), (isUser.value = user))
        : ((isLoggedIn.value = false), (isUser.value = ""));
    });
  });

  return { isLoggedIn, isUser, handleSignOut };
});
