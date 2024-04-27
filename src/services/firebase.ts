import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7QHg-QpznXhqsMWwz2jb_h0G-trSUs3M",
  authDomain: "fire-db-4c2c1.firebaseapp.com",
  projectId: "fire-db-4c2c1",
  storageBucket: "fire-db-4c2c1.appspot.com",
  messagingSenderId: "69901425522",
  appId: "1:69901425522:web:33a8f1c36150d44ea69beb",
  measurementId: "G-Y5XRF05BLR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("firebase~", app);

export const setupFirebase = () => {
  return app;
};

export const db = getFirestore(app);
