import { Request } from '@/types/firestoreTypes';

const groupByReceiver = (title: string, requests: Request[]) => {
  const filteredReceiver = [...requests];
  const arr = filteredReceiver.filter((eachRequest) => {
    if (eachRequest.receiver === title && eachRequest.sender !== title) {
      return eachRequest;
    }
  });

  return arr;
};

export default groupByReceiver;
