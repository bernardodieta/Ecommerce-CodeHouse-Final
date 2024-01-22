import { db } from "../../config/firebase.js"
import { collection, getDocs, query, where } from "firebase/firestore";

async function FirestoreData({ category }) {
    
    const q = query(collection(db, "products"), where("category", "==", category));
    const data = await getDocs(q);
    return { data: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) };
}

export default FirestoreData