// Import Firebase SDK
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from "firebase/auth";

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

// Google sign-in function with fallback to redirect method
export const signInWithGoogle = async () => {
  try {
    let user;

    try {
      // Try popup first (works in most development environments)
      const result = await signInWithPopup(auth, googleProvider);
      user = result.user;
    } catch (popupError) {
      console.log("Popup sign-in failed, trying redirect method...", popupError);

      // If popup fails (like in some deployed environments), try redirect
      if (popupError.code === 'auth/unauthorized-domain') {
        // Start the redirect flow
        await signInWithRedirect(auth, googleProvider);
        return null; // This function will return after redirect completes
      } else {
        // If it's another error, throw it
        throw popupError;
      }
    }

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

// Function to check if we're returning from a redirect
export const checkRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);

    if (result && result.user) {
      // User successfully signed in after redirect
      return {
        id: result.user.uid,
        name: result.user.displayName || result.user.email.split('@')[0],
        email: result.user.email,
        photoURL: result.user.photoURL,
        provider: 'google'
      };
    }

    return null; // No redirect result
  } catch (error) {
    console.error("Error checking redirect result:", error);
    throw error;
  }
};

export { auth };