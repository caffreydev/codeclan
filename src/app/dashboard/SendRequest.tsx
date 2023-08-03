"use client"
import { useState } from 'react';
import group from '../function/groupByKata';
import lfp from '@/sample-data/LfP';
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

type SendRequestProps = {};

const SendRequest:React.FC<SendRequestProps> = () => {

  const [grouped, setGrouped] = useState<GroupedRequests>(group(lfp));
  const [acceptedRequests, setAcceptedRequests] = useState<AcceptedRequest[]>([]);

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
                      <p className=''>Request Sent</p>
                    ) : (
                      <>
                        <button
                          className='border-2 rounded-lg p-1 px-3'
                          onClick={() => {
                            handleAccept(requestObj.sender, pair[0]);
                          }}
                        >
                          Send Request
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
export default SendRequest;