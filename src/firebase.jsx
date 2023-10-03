// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAxNj3ARHekIs2327OGw3XNxl7v5X5Cs4",
  authDomain: "fir-a3e7c.firebaseapp.com",
  projectId: "fir-a3e7c",
  storageBucket: "fir-a3e7c.appspot.com",
  messagingSenderId: "852587623192",
  appId: "1:852587623192:web:cce97650dbb73d4204e46d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)
const google = ()=>{
  let provider = new GoogleAuthProvider()
  return signInWithPopup(auth,provider)
}

export const db = getFirestore()
const handleLogin = ()=>{
  google().then((user)=>console.log(user))
}

const Firebase = ()=>{
  return (
    <div>
      <button onClick={handleLogin}>Google Auth</button>
    </div>
  )
}

export default Firebase