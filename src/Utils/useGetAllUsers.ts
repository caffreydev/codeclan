import { firestore} from "@/firebase/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const db = firestore

export function useGetAllUsers (setLoadState: React.Dispatch<React.SetStateAction<boolean>>) {

    const [users, setUsers ] = useState<any[] | undefined>(undefined);
   
    useEffect(()=> {
        const array: any[] = []
        const res =  async () => {
          const querySnapshot =  await getDocs(collection(db, 'users'))
          querySnapshot.forEach((doc) => array.push(doc.data()))
          setUsers(array)
          setLoadState(true)
        }
        res()
    }, [setLoadState])
         
    return users
}