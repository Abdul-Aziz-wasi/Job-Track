
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDD4Fi1vmS5JvXcAfCr7dT2OPC_hexgqQ",
  authDomain: "my-auth-for-assignment.firebaseapp.com",
  projectId: "my-auth-for-assignment",
  storageBucket: "my-auth-for-assignment.firebasestorage.app",
  messagingSenderId: "715672979012",
  appId: "1:715672979012:web:f8dbec9f4839d559df5e11"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)