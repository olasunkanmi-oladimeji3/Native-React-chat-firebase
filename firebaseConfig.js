// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getReactNativePersistence,initializeAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCUvzQSVW6a38eMXkNii9M1YOz-wedy08",
  authDomain: "fir-native-chat-b27cd.firebaseapp.com",
  projectId: "fir-native-chat-b27cd",
  storageBucket: "fir-native-chat-b27cd.firebasestorage.app",
  messagingSenderId: "210806476878",
  appId: "1:210806476878:web:a9455108d7ff38ef06731f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence()

})