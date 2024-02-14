import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { toast } from "react-toastify";

export function useDeleteTodo() {
  const deletedDoc = async (colName, id) => {
    await deleteDoc(doc(db, colName, id));
    toast.success("You have deleted todo !");
  };

  return { deletedDoc };
}
