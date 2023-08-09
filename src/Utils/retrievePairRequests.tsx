import { firestore} from "@/firebase/firebase";

import { useState, useEffect } from "react";


import { collection, getDocs } from "firebase/firestore";

const db = firestore



export function requestPairRequests (setLoadState: React.Dispatch<React.SetStateAction<boolean>>) {

    const [requests, setRequests ] = useState<any[] | undefined>(undefined);
   
        useEffect(()=> {
            const array: any[] = []
            const res =  async () => {
            
             const querySnapshot =  await getDocs(collection(db, 'requests'))

              
               querySnapshot.forEach((doc) => array.push(doc.data()))
               setRequests(array)
               setLoadState(true)
               
        }
      
        res()
      
    }, [setLoadState])
         
      
        return requests
    }