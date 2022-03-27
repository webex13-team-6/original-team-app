import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyASxzdBaEvWLh6PUhAqHSKllZpSp10e5Lw",
  authDomain: "team6-app.firebaseapp.com",
  projectId: "team6-app",
  storageBucket: "team6-app.appspot.com",
  messagingSenderId: "547628452847",
  appId: "1:547628452847:web:70f7410df3d07ee4b2841a",
  measurementId: "G-8GD90TZM66",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
