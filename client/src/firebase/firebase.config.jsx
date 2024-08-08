import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAHH5mAkf9U3JJJ54_6IsIBkDUTzcQPyPA",
  authDomain: "petadaptation.firebaseapp.com",
  projectId: "petadaptation",
  storageBucket: "petadaptation.appspot.com",
  messagingSenderId: "574601451111",
  appId: "1:574601451111:web:d7bccd6600d83cc03ba6c2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth