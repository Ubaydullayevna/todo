import { useEffect, useState } from "react";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export function useCollection(colName, _q) {
  const [documents, setDocuments] = useState(null);
  const q = query(collection(db, colName), where(..._q));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        const todo = { id: doc.id, ...doc.data() };
        console.log(todo);
        results.push(todo);
      });

      setDocuments(results);
    });

    return () => unsubscribe();
  }, []);

  return { documents };
}
