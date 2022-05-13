import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAQR8ZxwW6NP9WGI7M-FPTX_vmwe1CSP4",
  authDomain: "nxt-blog-89ef4.firebaseapp.com",
  projectId: "nxt-blog-89ef4",
  storageBucket: "nxt-blog-89ef4.appspot.com",
  messagingSenderId: "264218477636",
  appId: "1:264218477636:web:24aededaabab1cb6de2811",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
