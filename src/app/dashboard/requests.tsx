





import { firestore} from "@/firebase/firebase";

import { useState, useEffect } from "react";


import { collection, getDocs } from "firebase/firestore";

const db = firestore



export default  async function requests () {

    const [requests, setRequests ] = useState([])
   
        useEffect(()=> {
            const array = []
            const res =  async () => {
            
             const querySnapshot =  await getDocs(collection(db, 'pairRequests'))

              
               querySnapshot.forEach((doc) => array.push(doc.data()))
            
               
        }
      
        res()
        console.log(array)
        setRequests(array)
    }, [])
         
      
        return requests
    }