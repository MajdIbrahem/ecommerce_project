import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyCPHscvSrvEN_nSZVGZ55ktz7YHE_gzIWQ",
    authDomain: "eshop-919c9.firebaseapp.com",
    projectId: "eshop-919c9",
    storageBucket: "eshop-919c9.appspot.com",
    messagingSenderId: "137077331856",
    appId: "1:137077331856:web:10d5f9632d315902cac515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;