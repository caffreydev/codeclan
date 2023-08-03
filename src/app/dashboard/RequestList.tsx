"use client"
import { useState } from 'react';
import group from '../function/groupByKata';
import kataRequests from '@/sample-data/requests';
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
  const [grouped, setGrouped] = useState<GroupedRequests>(group(kataRequests));
  const [acceptedRequests, setAcceptedRequests] = useState<AcceptedRequest[]>([]);

  const handleDelete = (sender: string, title: string) => {
    setGrouped((curr) => {
      const updatedGrouped: GroupedRequests = {
        ...curr,
        [title]: curr[title].filter((requestObj) => requestObj.sender !== sender),
      };
      console.log(updatedGrouped);
      return updatedGrouped;
    });
  };

  const handleAccept = (sender: string, title: string) => {
    setAcceptedRequests([...acceptedRequests, { sender, title }]);
  };

  return (
    <ul className='my-5 grid gap-5 auto-rows-auto'>
      {Object.entries(grouped).map((pair) => {
        if (pair[1].length === 0) {
          return null;
        }
        return (
          <li className='col-span-1 p-4 bg-grey-400 border-0 rounded-2xl' key={pair[0]}>
            <h4 className='text-xl font-bold mb-2'>{pair[0]}</h4>
            <ul>
              {pair[1].map((requestObj: Request, i: number) => {
                const isAccepted = acceptedRequests.some(
                  (acceptedRequest) =>
                    acceptedRequest.sender === requestObj.sender && acceptedRequest.title === pair[0]
                );
                return (
                  <li className={`${i + 1 == pair[1].length} flex items-center p-2 rounded`} key={requestObj.reqId}>
                    <Link href="/" className='flex-grow'>
                      {requestObj.sender}
                    </Link>
                    {isAccepted ? (
                      <Link
                        href={`/use-client?sender=${requestObj.sender}&title=${pair[0]}`}
                        className='border-0 rounded-lg p-1 w-15 mx-15 bg-accept'
                      >
                        <p>Click to Join</p>
                      </Link>
                    ) : (
                      <>
                        <button
                          className='border-0 rounded-lg p-1 w-9 mx-3 bg-accept'
                          onClick={() => {
                            handleAccept(requestObj.sender, pair[0]);
                          }}
                        >
                          ✔
                        </button>
                        <button
                          className='border-0 rounded-lg p-1 w-9 bg-decline'
                          onClick={() => {
                            handleDelete(requestObj.sender, pair[0]);
                          }}
                        >
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
};

export default RequestList;