import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACeuHDFF8Mpbt1YxOrZXdYUSD3XpXTg9I",
    authDomain: "webbea-official.firebaseapp.com",
    projectId: "webbea-official",
    storageBucket: "webbea-official.firebasestorage.app",
    messagingSenderId: "686702290200",
    appId: "1:686702290200:web:5bfd7dbf7bb905c227aa6d",
    measurementId: "G-FEKQ0SBE9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
