// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getReactNativePersistence,initializeAuth} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {collection,getFirestore} from 'firebase/firestore'
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
    persistence: getReactNativePersistence(AsyncStorage)

});

export const db = getFirestore(app)
export const usersRef = collection(db,'users')
export const roomRef = collection(db,'rooms')