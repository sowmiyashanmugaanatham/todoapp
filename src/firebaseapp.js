import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbhJiqlHA9De8CKS202J0v1LHPiwLzSQU",
    authDomain: "todo-app-cp-b6857.firebaseapp.com",
    projectId: "todo-app-cp-b6857",
    storageBucket: "todo-app-cp-b6857.appspot.com",
    messagingSenderId: "1049872756980",
    appId: "1:1049872756980:web:a90140d671fdc0ca69eea1",
    measurementId: "G-QY4YV8J5JH"
  });

const db= firebaseApp.firestore();

export default db;

     

 