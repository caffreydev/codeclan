'use client';
import { useEffect, useState } from 'react';
import group from '../function/groupByKata';
import { requestPairRequests } from '@/Utils/retrievePairRequests';

import Link from 'next/link';

interface Request {
  sender: string;
  reqId: number;
}

interface AcceptedRequest {
  sender: string;
  title: string;
}

type GroupedRequests = {
  [key: string]: Request[];
};

type RequestListProps = {};

const RequestList: React.FC<RequestListProps> = () => {
  const [loadState, setLoadState] = useState(false);
  const requests: Request[] = requestPairRequests(setLoadState);
  const [grouped, setGrouped] = useState<GroupedRequests>({});
  const [acceptedRequests, setAcceptedRequests] = useState<AcceptedRequest[]>([]);

  useEffect(() => {
  //   if (loadState) setGrouped(group(requests))
  // }, [loadState])
    setGrouped(group(requests));
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
            <li className='col-span-1 rounded-xl border border-grey-600 bg-grey-800 p-4' key={pair[0]}>
              <h4 className='mb-2 text-xl font-bold'>{pair[0]}</h4>
              <ul>
                {pair[1].map((requestObj: Request, i: number) => {
                  const isAccepted = acceptedRequests.some(
                    (acceptedRequest) => acceptedRequest.sender === requestObj.sender && acceptedRequest.title === pair[0],
                  );
                  return (
                    <li className={`${i + 1 == pair[1].length} flex items-center rounded p-2`} key={requestObj.reqId}>
                      <Link href='/' className='grow'>
                        {requestObj.sender}
                      </Link>
                      {isAccepted ? (
                        <Link href={`/use-client?sender=${requestObj.sender}&title=${pair[0]}`} className='w-15 mx-15 rounded-lg border-0 bg-accept p-1'>
                          <p>Click to Join</p>
                        </Link>
                      ) : (
                        <>
                          <button
                            className='mx-3 w-9 rounded-lg border-0 bg-accept p-1'
                            onClick={() => {
                              handleAccept(requestObj.sender, pair[0]);
                            }}>
                            ✔
                          </button>
                          <button
                            className='w-9 rounded-lg border-0 bg-decline p-1'
                            onClick={() => {
                              handleDelete(requestObj.sender, pair[0]);
                            }}>
                            ✘
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
