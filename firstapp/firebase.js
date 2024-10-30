// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGenzF01-MsVDIp2Wma0ju4wm80MNegpk",
  authDomain: "fir-app-auth-8b9e8.firebaseapp.com",
  projectId: "fir-app-auth-8b9e8",
  storageBucket: "fir-app-auth-8b9e8.appspot.com",
  messagingSenderId: "830508375495",
  appId: "1:830508375495:web:ac72205b11ac1ffdcf4de2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };