'use client';
import { useEffect, useState } from 'react';
import group from '../function/groupByKata';
import { auth } from '../../firebase/firebase';
import { requestPairRequests } from '@/Utils/requestPairRequests';
import { useAuthState } from 'react-firebase-hooks/auth';
import groupByReceiver from '../function/groupByReceiever';
import { FiCheck, FiCheckCircle, FiUserCheck, FiUserX, FiX } from 'react-icons/fi';
import { Request } from '@/Utils/pairRequest';

import Link from 'next/link';

interface AcceptedRequest {
  sender: string;
  title: string;
}

type GroupedRequests = {
  [key: string]: AcceptedRequest[];
};

type RequestListProps = {};

const RequestList: React.FC<RequestListProps> = () => {
  const [loadState, setLoadState] = useState(false);
  const requests: Request[] = requestPairRequests(setLoadState);
  const [grouped, setGrouped] = useState<GroupedRequests>({});
  const [acceptedRequests, setAcceptedRequests] = useState<AcceptedRequest[]>([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const filter = groupByReceiver(user?.displayName as string, requests);
    setGrouped(group(filter));
  }, [loadState]);

  const handleDelete = (sender: string, title: string) => {
    setGrouped((curr) => {
      const updatedGrouped: GroupedRequests = {
        ...curr,
        [title]: curr[title].filter((requestObj) => requestObj.sender !== sender),
      };
      return updatedGrouped;
    });
  };

  const handleAccept = (sender: string, title: string) => {
    setAcceptedRequests([...acceptedRequests, { sender, title }]);
  };
  if (!loadState) return <h1>Loading Dashboard</h1>;
  else {
    return (
      <ul className='mt-5 grid auto-rows-auto gap-5'>
        {Object.entries(grouped).map((pair) => {
          if (pair[1].length === 0) {
            return null;
          }
          return (
            <li className='col-span-1 rounded-lg border border-grey-600 bg-grey-800 p-4' key={pair[0]}>
              <h4 className='mb-2 text-xl font-bold'>{pair[0]}</h4>
              <ul className='flex flex-col gap-2'>
                {pair[1].map((requestObj: AcceptedRequest, i: number) => {
                  const isAccepted = acceptedRequests.some(
                    (acceptedRequest) => acceptedRequest.sender === requestObj.sender && acceptedRequest.title === pair[0],
                  );
                  return (
                    <li className={`${i + 1 == pair[1].length} flex items-center rounded bg-grey-700 p-2`} key={requestObj.sender + requestObj.title}>
                      <Link href='/' className='grow'>
                        {requestObj.sender}
                      </Link>
                      {isAccepted ? (
                        <div className='w-15 mx-15 rounded-lg border-0 bg-accept p-1'>
                          <p>Request Accepted</p>
                        </div>
                      ) : (
                        <>
                          <button
                            className='mr-2 rounded-lg border border-accept p-1 transition hover:bg-green-800'
                            onClick={() => {
                              handleAccept(requestObj.sender, pair[0]);
                            }}>
                            <FiCheck />
                          </button>
                          <button
                            className='rounded-lg border border-decline p-1 transition hover:bg-red-800'
                            onClick={() => {
                              handleDelete(requestObj.sender, pair[0]);
                            }}>
                            <FiX />
                          </button>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
};
export default RequestList;
