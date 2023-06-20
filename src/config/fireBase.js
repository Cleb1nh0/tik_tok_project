
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDC1_LWKARYb9GQdBfaL58GGBpmMBcOTNY",
  authDomain: "tiktok---jornada-e1c5c.firebaseapp.com",
  projectId: "tiktok---jornada-e1c5c",
  storageBucket: "tiktok---jornada-e1c5c.appspot.com",
  messagingSenderId: "1000818649486",
  appId: "1:1000818649486:web:7894c7da4ffbfa3028dcdf"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
