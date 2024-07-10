import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth} from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1cj4P1UfrxytImY6COYmkZSV5NKi4gmQ",
  authDomain: "pruebalunes-e44de.firebaseapp.com",
  databaseURL: "https://pruebalunes-e44de-default-rtdb.firebaseio.com",
  projectId: "pruebalunes-e44de",
  storageBucket: "pruebalunes-e44de.appspot.com",
  messagingSenderId: "694275058240",
  appId: "1:694275058240:web:e0f57081ddcf6f87310da5"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
//export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const storage = getStorage(app);
