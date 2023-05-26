import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV6_swtGgXIyr0GirFJ-2Z1aDwncFH2Wc",
  authDomain: "react-auth-dd2f0.firebaseapp.com",
  projectId: "react-auth-dd2f0",
  storageBucket: "react-auth-dd2f0.appspot.com",
  messagingSenderId: "707227266932",
  appId: "1:707227266932:web:3a74e4774df6a49f978621",
  measurementId: "G-YRYLPDKJ9L",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
