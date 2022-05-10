// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyJN9BVxMp3BDPB4fNppTyidMjHu5K2Zk",
  authDomain: "warehouse-management-90c9c.firebaseapp.com",
  projectId: "warehouse-management-90c9c",
  storageBucket: "warehouse-management-90c9c.appspot.com",
  messagingSenderId: "136882179648",
  appId: "1:136882179648:web:f3a434f4279301012759a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;