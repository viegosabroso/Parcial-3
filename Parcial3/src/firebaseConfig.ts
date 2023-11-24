
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAq5OU3xOYkW0C51Xz_WzBQYEDv91wIfyM",
  authDomain: "parcial3-2bcaf.firebaseapp.com",
  projectId: "parcial3-2bcaf",
  storageBucket: "parcial3-2bcaf.appspot.com",
  messagingSenderId: "687032354237",
  appId: "1:687032354237:web:75262c32864286d82d7ed4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


// Add a new document with a generated id.
const docRef = addDoc(collection(db, "cuadros"), {
  

});
