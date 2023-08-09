'use client';
import { useState , useEffect} from 'react';
import group from '../function/groupByKata';
import lfp from '@/sample-data/LfP';
import Link from 'next/link';
import { requestPairRequests } from '@/Utils/retrievePairRequests';
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

const SendRequest: React.FC<SendRequestProps> = () => {
    const [loadState, setLoadState] = useState(false);
    const requests: Request[] = requestPairRequests(setLoadState);
  const [acceptedRequests, setAcceptedRequests] = useState<AcceptedRequest[]>([]);
  const [grouped, setGrouped] = useState<GroupedRequests>();
  const handleAccept = (sender: string, title: string) => {
    setAcceptedRequests([...acceptedRequests, { sender, title }]);
  };


    useEffect(()=> {
        
           setGrouped(group(requests))

    }, [loadState])



if (!loadState) {return <h1>'is loading'</h1>}

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
                      <p className=''>Request Sent</p>
                    ) : (
                      <>
                        <button
                          className='rounded-lg border-2 p-1 px-3'
                          onClick={() => {
                            handleAccept(requestObj.sender, pair[0]);
                          }}>
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
};
}
export default SendRequest;
