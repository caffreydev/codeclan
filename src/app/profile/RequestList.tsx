import { requestPairRequests } from '@/Utils/requestPairRequests';
import { auth, firestore } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Request } from '@/Utils/pairRequest';
import { deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

type RequestListProps = {};

const RequestList: React.FC<RequestListProps> = () => {
  const [user] = useAuthState(auth);
  const [requestRetrieved, setRequestRetrieved] = useState(false);
  const requestData = requestPairRequests(setRequestRetrieved) as Request[];

  const handleDelete = async (reqId: string) => {
    try {
      await deleteDoc(doc(firestore, 'requests', reqId));
      toast.success('Your request has been deleted', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    } catch {
      toast.error('Request not deleted. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  if (!requestRetrieved) return null;
  return (
    <div>
      {/* <ul className='flex flex-col gap-3'>
      {userData.completedKatas.map((kata) => {
        return (
          <li key={kata} className={`flex items-center rounded-lg border border-grey-500  bg-grey-600 p-2 transition hover:border-primary hover:bg-grey-500`}>
            <p className='hover:text-grey-100'>{kata}</p>
          </li>
        );
      })}
    </ul> */}
      <ul className='flex flex-col gap-4 rounded-lg  p-4'>
        {requestData
          .filter((request) => request.sender === user?.displayName)
          .map((request) => {
            return (
              <li key={request.id} className='grid grid-cols-3 rounded-lg border border-grey-500 bg-grey-600 p-2'>
                <p className='col-span-2 mr-20'>{`Request sent to ${request.receiver} for ${request.title} kata`}</p>
                <div>
                  <button className='max-w-sm rounded-lg border border-grey-300 p-2 px-2 transition hover:bg-red-800' onClick={() => handleDelete(request.id)}>
                    Delete request
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default RequestList;
