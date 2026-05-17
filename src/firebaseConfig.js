// Firebase configuration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAvggI_dgC36Wg-McL5VZlWMIMWFIRiuno",
  authDomain: "medhal-21df9.firebaseapp.com",
  projectId: "medhal-21df9",
  storageBucket: "medhal-21df9.firebasestorage.app",
  messagingSenderId: "821409726912",
  appId: "1:821409726912:web:1ee5bbf1f06505cb130825",
  measurementId: "G-DB324PDYNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
