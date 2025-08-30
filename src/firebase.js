import { initializeApp } from "firebase/app";
import { addDoc,
          collection,
          getFirestore } from "firebase/firestore"
import { createUserWithEmailAndPassword,
          getAuth, 
          signInWithEmailAndPassword, 
          signOut} from "firebase/auth/cordova";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyANe6aqzw0C5dilalkhjQrPxhKcVTz8AB0",
  authDomain: "netflix-clone-d4a6d.firebaseapp.com",
  projectId: "netflix-clone-d4a6d",
  storageBucket: "netflix-clone-d4a6d.firebasestorage.app",
  messagingSenderId: "54589040156",
  appId: "1:54589040156:web:ba39aa4fe24cb2741721d9",
  measurementId: "G-Z40ECDTPVD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
        const respo = await createUserWithEmailAndPassword(auth, email, password);
        const user = respo.user;
        await addDoc(collection(db, "user", {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        }))
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
  try{
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = ()=>{
  signOut(auth); 
}

export {auth, db, login, signup, logout};