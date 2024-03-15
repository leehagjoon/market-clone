import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgSOy7olx8nQQh2EBrH882u2zipSSCGeI",
  authDomain: "carrot-market-7d797.firebaseapp.com",
  databaseURL: "https://carrot-market-7d797-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-7d797",
  storageBucket: "carrot-market-7d797.appspot.com",
  messagingSenderId: "455563157011",
  appId: "1:455563157011:web:81706114cdb7d2e0f2e9e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
