// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3u0MdLS7yEACt4wBe40uvsM7ugBX1PSk",
  authDomain: "netflixgptnew-5508e.firebaseapp.com",
  projectId: "netflixgptnew-5508e",
  storageBucket: "netflixgptnew-5508e.firebasestorage.app",
  messagingSenderId: "790781037505",
  appId: "1:790781037505:web:70987298d7a2175fae7d40",
  measurementId: "G-8V6WP9KEWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
