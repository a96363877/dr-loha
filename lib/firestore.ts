import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBM_aVkcfmPPmgVgtEcvA0X9esx1Mp4JHk",
  authDomain: "kuwait-9c991.firebaseapp.com",
  projectId: "kuwait-9c991",
  storageBucket: "kuwait-9c991.firebasestorage.app",
  messagingSenderId: "198628126589",
  appId: "1:198628126589:web:cf246c6ff140b774546614",
  measurementId: "G-3RQN41B2V4"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};



