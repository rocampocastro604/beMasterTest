// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbkMo2o3be5XOG4Hu87fMZXFOob2mTKzU",
  authDomain: "bemaster-test.firebaseapp.com",
  projectId: "bemaster-test",
  storageBucket: "bemaster-test.appspot.com",
  messagingSenderId: "736718782764",
  appId: "1:736718782764:web:0389d8e14dc76fd278ac89",
  measurementId: "G-V84J3J2Z4X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }