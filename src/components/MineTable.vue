<template>
  <div class="content">
    <h3>我的表格</h3>
    <div class="form">
      <input type="text" v-model="form.name" placeholder="name" />
      <input type="number" v-model="form.year" placeholder="year" />
      <button v-on:click="create">Send</button>
    </div>
    <table>
      <thead>
        <td>ID</td>
        <td>Name</td>
        <td>Year</td>
        <td>Updater</td>
        <td></td>
      </thead>
      <tbody>
        <tr v-for="i in ans" :key="i">
          <td>{{ i.id }}</td>
          <td>
            <input type="text" v-model="i.name" />
          </td>
          <td>
            <input type="text" v-model="i.year" />
          </td>
          <td>
            <p>{{ i.updater }}</p>
          </td>
          <td>
            <button @click.stop="update(i)">Update</button>
            <button @click.stop="remove(i)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { db } from "@/services/firebase";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { onMounted, onUnmounted, ref, reactive } from "vue";
import { useGlobalStore } from "@/stores/global";

const global = useGlobalStore();
const ans: any = ref([]);
let unsubscribe;
const form = reactive({
  name: ref(""),
  year: ref(0),
});

onMounted(() => {
  const latestQuery = query(collection(db, "dina"), orderBy("year", "desc"));

  unsubscribe = onSnapshot(latestQuery, (snapshot) => {
    ans.value = [];
    snapshot.forEach((doc) => {
      ans.value.push({
        id: doc.id,
        name: doc.data().name,
        year: doc.data().year,
        updater: doc.data().updater,
      });
    });
  });
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});

const create = async () => {
  try {
    const docRef = await addDoc(collection(db, "dina"), {
      name: form.name,
      year: form.year,
      updater: global.isUser.email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  } finally {
    form.name = "";
    form.year = 0;
  }
};

const update = async (e) => {
  const docRef = doc(db, "dina", e.id);

  try {
    await updateDoc(docRef, {
      name: e.name,
      year: e.year,
      updater: global.isUser.email,
    });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const remove = async (e) => {
  const docRef = doc(db, "dina", e.id);

  try {
    await deleteDoc(docRef);
  } catch (err) {
    console.error("Error: ", err);
  }
};
</script>

<style scoped lang="scss">
.content {
  padding: 10px;
  background-color: var(--color-secondary-bg);

  table {
    width: 100%;

    td {
      padding: 5px;
      border: 1px solid var(--color-border);
      background-color: var(--color-primary-bg);
      font-size: 12px;
    }
  }
}
</style>
