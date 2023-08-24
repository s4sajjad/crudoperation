import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const getUserDataFirebase = async() => {
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);

    const data = [];

    querySnapshot.forEach((doc) => {
        const d= doc.data();
        d.id = doc.id;
        data.push(d);
    });
   return data;
}

export const addUserFirebase = async (data) => {
    let collectionRef = collection(db, "users")
    const docRef = await addDoc(collectionRef, data);
}
export const updateUserFirebase = async (data, id) => {

    let refDoc = doc(db, "users",  id)

    await updateDoc(refDoc, data);

}
export const deleteUserFirebase = async (id) => {

    let refDoc = doc(db, "users", id)

    await deleteDoc(refDoc);

}