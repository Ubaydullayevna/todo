import { useGlobalContext } from "./useGlobalContext";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";
import { toast } from "react-toastify";

export function useSignup() {
  const { dispatch } = useGlobalContext();

  // Login with email and password
  function signUp({ displayName, email, password }) {
    dispatch({ type: "IS_PENDING", payload: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, { displayName });
        toast.success("Welcome :)");
        dispatch({ type: "LOGIN", payload: userCredential.user });
        dispatch({ type: "ERROR", error: null });
        dispatch({ type: "IS_PENDING", payload: false });
      })
      .catch(({ message }) => {
        console.log(message);
        toast.error(message);
        dispatch({ type: "ERROR", error: message });
        dispatch({ type: "IS_PENDING", payload: false });
      });
  }

  // Login email with popup
  function signUpWithGoogleProvider() {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Welcome back :)");
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "ERROR", payload: null });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        dispatch({ type: "IS_PENDING", payload: true });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  }

  return { signUpWithGoogleProvider, signUp };
}
