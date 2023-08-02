"use client"

import { useState } from 'react';
import group from '../function/groupByKata';
import kataRequests from '@/sample-data/requests';
import Link from 'next/link';

type RequestListProps = {};

const RequestList: React.FC<RequestListProps> = () => {
  const [grouped, setGrouped] = useState(group(kataRequests));
  const [acceptedRequests, setAcceptedRequests] = useState([]);

  const handleDelete = (sender, title) => {
    setGrouped((curr) => {
      const updatedGrouped = {
        ...curr,
        [title]: curr[title].filter((requestObj: any) => requestObj.sender !== sender),
      };
      console.log(updatedGrouped);
      return updatedGrouped;
    });
  };

  const handleAccept = (sender, title) => {
    setAcceptedRequests([...acceptedRequests, { sender, title }]);
  };

  return (
    <ul className='my-5 grid grid-cols-2 gap-5 auto-rows-auto'>
      {Object.entries(grouped).map((pair) => {
        if (pair[1].length === 0) {
          return null;
        }
        return (
          <li className='col-span-1 p-3 bg-grey-400 border-0 rounded-2xl' key={pair[0]}>
            <h4 className='text-xl'>{pair[0]}</h4>
            <ul>
              {pair[1].map((requestObj) => {
                const isAccepted = acceptedRequests.some(
                  (acceptedRequest) =>
                    acceptedRequest.sender === requestObj.sender && acceptedRequest.title === pair[0]
                );
                return (
                  <li className='flex items-center' key={requestObj.reqId}>
                    <p className='flex-grow'>{requestObj.sender}</p>
                    {isAccepted ? (
                      <Link href={`/use-client?sender=${requestObj.sender}&title=${pair[0]}`} className='border-0 rounded-lg p-1 w-15 mx-15 bg-accept'>
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