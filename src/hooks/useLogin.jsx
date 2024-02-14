import { useGlobalContext } from "./useGlobalContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

export function useLogin() {
  const { dispatch } = useGlobalContext();

  // Login with email and password
  function login({ email, password }) {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Welcome come back )");
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

  return { login };
  // Login email with popup
}
