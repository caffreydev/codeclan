const group = (requests) => {
 console.log(requests, '<<<<<<<<<groups')
  let groupObj = {};
  const titles = requests.map((request) => request.title);
  const filteredTitles = titles.filter((title, i) => i === titles.indexOf(title));
  const grouped = filteredTitles.map((title) => {
    return requests.filter((request) => request.title === title);
  });

  filteredTitles.forEach((title, i) => {
    groupObj[title] = grouped[i];
  });
  return groupObj;
};

export default group;
