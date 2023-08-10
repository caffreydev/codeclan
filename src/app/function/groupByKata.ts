import { Request } from '@/types/firestoreTypes';

const group = (requests: Request[]) => {
  const groupObj: { [key: string]: Request[] } = {};
  const titles: string[] = requests.map((request) => request.title);
  const filteredTitles = titles.filter((title, i) => i === titles.indexOf(title));

  filteredTitles.forEach((title) => {
    groupObj[title] = requests.filter((request) => request.title === title);
  });

  return groupObj;
};

export default group;
