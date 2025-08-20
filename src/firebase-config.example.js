import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  confirmPasswordReset
} from "firebase/auth";

// Ejemplo de configuración leyendo variables de entorno (prefijo VUE_APP_)
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  sendPasswordResetEmail,
  confirmPasswordReset
};
