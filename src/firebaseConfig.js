// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpt4Yh00hyP43taRy9QRsUajCvtsi1Z84",
    authDomain: "juwelrana-7ec61.firebaseapp.com",
    projectId: "juwelrana-7ec61",
    storageBucket: "juwelrana-7ec61.appspot.com",
    messagingSenderId: "528993110779",
    appId: "1:528993110779:web:3161848e7eea218dcefe5e",
    measurementId: "G-9XGHX7HGNQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
