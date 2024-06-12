import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyATRQQmWxZ2O-qU8Xzby13Qiftvg9YklD0",
  authDomain: "reactfirebase-a8fc2.firebaseapp.com",
  projectId: "reactfirebase-a8fc2",
  storageBucket: "reactfirebase-a8fc2.appspot.com",
  messagingSenderId: "260963462772",
  appId: "1:260963462772:web:2eab00e37d1a650202ab21",
  measurementId: "G-J6HCF24104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const database = getAuth(app)
