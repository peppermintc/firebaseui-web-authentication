import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const FIREBASE_APP_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
const FIREBASE_APP_INSTANCE = initializeApp(FIREBASE_APP_CONFIG);
const FIREBASE_APP_AUTH_INSTANCE = getAuth(FIREBASE_APP_INSTANCE);
const FIREBASE_UI_AUTH_ELEMENT_ID = "#firebaseui-auth-container";

/** Firebase UI의 Pre-built Auth UI를 DOM에 Load */
async function loadFirebaseAuthUI() {
  const firebaseUIModule = await import("firebaseui");
  const firebaseUIModuleAuthInstance =
    firebaseUIModule.auth.AuthUI.getInstance() ??
    new firebaseUIModule.auth.AuthUI(FIREBASE_APP_AUTH_INSTANCE);

  firebaseUIModuleAuthInstance.start(FIREBASE_UI_AUTH_ELEMENT_ID, {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  });
}

export { loadFirebaseAuthUI };
