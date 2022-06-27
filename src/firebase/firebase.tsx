// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCIq7Gqgp7t7BBzUc4JGEORjBylEXomyJk",
  authDomain: "connectimages-7c610.firebaseapp.com",
  projectId: "connectimages-7c610",
  storageBucket: "connectimages-7c610.appspot.com",
  messagingSenderId: "453638670819",
  appId: "1:453638670819:web:0ba554a4041fc7cba7b8d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);