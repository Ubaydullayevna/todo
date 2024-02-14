import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useState } from "react";

export function useAddNewTodo() {
  const [newTodos, setNewTodos] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const addNewDoc = async (colName, data) => {
    setIsPending(true);
    const docRef = await addDoc(collection(db, colName), data);
    setIsPending(false);
    setNewTodos(docRef);
  };

  return { addNewDoc, newTodos, isPending };
}
