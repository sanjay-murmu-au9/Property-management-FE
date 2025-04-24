// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAiSBPlmYJmpdADx_S4qBG6cbIFK31fi5o",
    authDomain: "property-management-f5d35.firebaseapp.com",
    projectId: "property-management-f5d35",
    storageBucket: "property-management-f5d35.firebasestorage.app",
    messagingSenderId: "734836822141",
    appId: "1:734836822141:web:9bab76deae398de762a114",
    measurementId: "G-DEWL1S5HC2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Google sign-in function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Return user information
    return {
      id: user.uid,
      name: user.displayName || user.email.split('@')[0],
      email: user.email,
      photoURL: user.photoURL,
      provider: 'google'
    };
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};

export { auth };