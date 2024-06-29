import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

const FetchUsers = async () => {
    try {
      // Reference to the "users" collection
      const usersCollection = collection(db, 'Users');
      
      // Get snapshot of the collection
      const usersSnapshot = await getDocs(usersCollection);
      
      // Map through snapshot and extract data
      const usersList = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      console.log(usersList); // You can set this in state for rendering in UI
      return usersList;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };
export {FetchUsers};  