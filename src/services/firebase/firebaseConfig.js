import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCLnKn3fY8rzMSisKIzd6prPcZGlgjcVHA",
    authDomain: "coderhouse-reactapp-372a5.firebaseapp.com",
    projectId: "coderhouse-reactapp-372a5",
    storageBucket: "coderhouse-reactapp-372a5.appspot.com",
    messagingSenderId: "1013477610161",
    appId: "1:1013477610161:web:547000f4c5b91e3735c890"
  };
  
  const app = initializeApp(firebaseConfig);