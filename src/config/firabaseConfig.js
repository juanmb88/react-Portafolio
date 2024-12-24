// src/config/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configuración de tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqmTAHE-MwrTRKcAEXsgs-jUUtaNP111A",
  authDomain: "contadorsitioweb.firebaseapp.com",
  projectId: "contadorsitioweb",
  storageBucket: "contadorsitioweb.firebasestorage.app",
  messagingSenderId: "539344437563",
  appId: "1:539344437563:web:9bd4efcb5fd5027059f71e",
  measurementId: "G-SKZWZGL1TL",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar la base de datos en tiempo real
export const db = getDatabase(app);
