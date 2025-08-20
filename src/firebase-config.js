import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  confirmPasswordReset
} from "firebase/auth";

// Configuración de Firebase desde variables de entorno
console.log('Cargando configuración de Firebase...');
console.log('API Key:', process.env.VUE_APP_FIREBASE_API_KEY ? '✅ Presente' : '❌ Faltante');
console.log('Project ID:', process.env.VUE_APP_FIREBASE_PROJECT_ID ? '✅ Presente' : '❌ Faltante');

// Configuración directa (temporal para pruebas)
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY || "AIzaSyBvXD9owAIKLE-jGH6MQ0uIq9NwF9gVnxM",
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || "login-dev-areatech.firebaseapp.com",
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || "login-dev-areatech",
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || "login-dev-areatech.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || "474940460782",
  appId: process.env.VUE_APP_FIREBASE_APP_ID || "1:474940460782:web:252384f203434100e8edff",
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID || "G-2Q1Q1W11SS"
};

console.log('Configuración de Firebase cargada:', firebaseConfig);

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  sendPasswordResetEmail,
  confirmPasswordReset,
  analytics
};
