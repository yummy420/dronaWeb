// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_igRCsDc20A5Zh0kJkaeO1vFNHFTD_QI",
    authDomain: "dronaapp-2e3bf.firebaseapp.com",
    projectId: "dronaapp-2e3bf",
    storageBucket: "dronaapp-2e3bf.appspot.com",
    messagingSenderId: "666925091930",
    appId: "1:666925091930:web:051e83e80969aaa3c91c63",
    measurementId: "G-YMWQFZDPQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;