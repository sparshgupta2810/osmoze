import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userInfoRef = collection(db, "user");
class UserDataService  {

    //add
    addUser = (newUser) => {
      return addDoc(userInfoRef, newUser);
    };
  
    //upadte
    updateUser = (id, updatedUser) => {
      const userDoc = doc(db, "user", id);
      return updateDoc(userDoc, updatedUser);
    };
  
    //delete
    deleteUser = (id) => {
      const userDoc = doc(db, "user", id);
      return deleteDoc(userDoc);
    };
  
    getAllUser = () => {
      return getDocs(userInfoRef);
    };
  
    getUser = (id) => {
      const userDoc = doc(db, "user", id);
      return getDoc(userDoc);
    };
  }
  
  export default new UserDataService();