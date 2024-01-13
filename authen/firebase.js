import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD__d-BTo4Z0yYeXDPbD5P13qR4-No0UQc",
  authDomain: "jvfull-3b9de.firebaseapp.com",
  projectId: "jvfull-3b9de",
  storageBucket: "jvfull-3b9de.appspot.com",
  messagingSenderId: "145599058011",
  appId: "1:145599058011:web:c9c372c6f2e3d3ab062f7e",
  measurementId: "G-E8PBBX296G",
};

const app = initializeApp(firebaseConfig);

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  return await signInWithPopup(auth, provider);
}
