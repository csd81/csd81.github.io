/**
 * Firebase initialisation for the client-side login gate.
 *
 * NOTE: these "keys" are *publishable* Firebase web config — they identify the
 * project, they are NOT secrets (security is enforced by Firebase's authorized
 * domains + provider settings). They are safe to commit and ship in the bundle.
 *
 * To wire a real project: create a Firebase project + Web app, then paste its
 * config values below (or supply them as `VITE_FIREBASE_*` build env vars).
 * Enable Google, Email/Password and Email-link sign-in in the console, and add
 * `csd81.github.io` + `localhost` to Authentication → Settings → Authorized
 * domains.
 */
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const env = import.meta.env as Record<string, string | undefined>;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY ?? 'AIzaSyB96JX2hOnk6CEHOBTUjGNle6qCB4o2qvQ',
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN ?? 'numeric-edu-project.firebaseapp.com',
  projectId: env.VITE_FIREBASE_PROJECT_ID ?? 'numeric-edu-project',
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET ?? 'numeric-edu-project.firebasestorage.app',
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '886612314410',
  appId: env.VITE_FIREBASE_APP_ID ?? '1:886612314410:web:be119e455bbb9e142f7653',
};

/** True once real config has been supplied (so the UI can warn while it hasn't). */
export const firebaseConfigured = !firebaseConfig.apiKey.startsWith('REPLACE_ME');

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
