import { requestPairRequests } from '@/Utils/retrievePairRequests';
import { auth, firestore } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Request } from '@/Utils/pairRequest';
import { deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

type RequestListProps = {
  
};

const RequestList:React.FC<RequestListProps> = () => {
  const [user] = useAuthState(auth);
  const [requestRetrieved, setRequestRetrieved] = useState(false);
  const requestData = requestPairRequests(setRequestRetrieved) as Request[];

  const handleDelete = async (reqId: string) => {
    try {
      await deleteDoc(doc(firestore, 'requests', reqId))
      toast.success('Your request has been deleted')
    } catch {
      toast.error('Request not deleted. Please try again.')
    }
  }

  if (!requestRetrieved) return null
  return <div>
    {/* <ul className='flex flex-col gap-3'>
      {userData.completedKatas.map((kata) => {
        return (
          <li key={kata} className={`flex items-center rounded-lg border border-grey-500  bg-grey-600 p-2 transition hover:border-primary hover:bg-grey-500`}>
            <p className='hover:text-grey-100'>{kata}</p>
          </li>
        );
      })}
    </ul> */}
    <ul>
      {requestData.filter(request => request.sender === user?.displayName).map(request => {
        return <li key={request.id} >
          <p>{`Request sent to ${request.receiver} for ${request.title} kata`}</p>
          <button onClick={() => handleDelete(request.id)}>
            Delete Request
          </button>
        </li>
      })}
    </ul>
  </div>
}
export default RequestList;