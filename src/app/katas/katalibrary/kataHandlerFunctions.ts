//all failedTests.push() the first failed test case, or 0 if passed all

export const fibonnaciFunTimeHandler = (userFunc: Function) => {
  const failedTests: number[] = [];

  //testcase 1
  if (!userFunc) {
    return [1];
  }

  //test case 2
  if (userFunc(0) !== 0) {
    failedTests.push(2);
  }

  //test case 3
  if (userFunc(4) !== 3) {
    failedTests.push(3);
  }

  //test case 4
  if (userFunc(10) !== 55) {
    failedTests.push(4);
  }

  //test case 5
  if (userFunc(15) !== 610) {
    failedTests.push(5);
  }

  //test case 6
  if (userFunc(20) !== 6765) {
    failedTests.push(6);
  }

  //test case 7
  if (userFunc(40) !== 102334155) {
    failedTests.push(7);
  }

  return failedTests;
};

export const friendFilterHandler = (userFunc: Function) => {
  const failedTests: number[] = [];

  //testcase 1
  if (!userFunc) {
    return [1];
  }

  //test case 2
  const testArray2 = [
    {
      name: 'damian',
      hobbies: ['flyfishing', 'lotr marathons'],
      Likes_LOTR: true,
    },
    {
      name: 'jess',
      hobbies: ['searching for divs', 'committing to main'],
      Likes_LOTR: true,
    },
    {
      name: 'saruman',
      hobbies: ['gazing into the palantir', 'fingerpainting'],
      Likes_LOTR: false,
    },
    {
      name: 'kc',
      hobbies: ['rugby', 'picnics'],
      Likes_LOTR: false,
    },
    {
      name: 'asad',
      hobbies: ['jam making', 'stargazing'],
      Likes_LOTR: true,
    },
    {
      name: 'joe',
      hobbies: ['folder structure', 'lotr cosplay'],
      Likes_LOTR: true,
    },
    {
      name: 'gandalf',
      hobbies: ['blowing smoke rings', 'fireworks'],
      Likes_LOTR: true,
    },
  ];

  const result2 = userFunc(testArray2);
  if (
    !Array.isArray(result2) ||
    result2.length !== 5 ||
    !result2.every((obj) => {
      return Object.keys(obj).includes('name') && Object.keys(obj).includes('hobbies') && Object.keys(obj).includes('Likes_LOTR');
    })
  ) {
    failedTests.push(2);
  }

  //test case 3
  const testArray3 = [
    {
      name: 'damian',
      hobbies: ['flyfishing', 'lotr marathons'],
      Likes_LOTR: false,
    },
    {
      name: 'jess',
      hobbies: ['searching for divs', 'committing to main'],
      Likes_LOTR: false,
    },
    {
      name: 'saruman',
      hobbies: ['gazing into the palantir', 'fingerpainting'],
      Likes_LOTR: false,
    },
    {
      name: 'kc',
      hobbies: ['rugby', 'picnics'],
      Likes_LOTR: false,
    },
    {
      name: 'asad',
      hobbies: ['jam making', 'stargazing'],
      Likes_LOTR: false,
    },
    {
      name: 'joe',
      hobbies: ['folder structure', 'lotr cosplay'],
      Likes_LOTR: false,
    },
    {
      name: 'gandalf',
      hobbies: ['blowing smoke rings', 'fireworks'],
      Likes_LOTR: false,
    },
  ];

  const result3 = userFunc(testArray3);
  if (!Array.isArray(result3) || result3.length !== 0) {
    failedTests.push(3);
  }

  //test case 4
  const testArray4 = [
    {
      name: 'damian',
      hobbies: ['flyfishing', 'lotr marathons'],
      Likes_LOTR: true,
    },
    {
      name: 'jess',
      hobbies: ['searching for divs', 'committing to main'],
      Likes_LOTR: true,
    },
    {
      name: 'saruman',
      hobbies: ['gazing into the palantir', 'fingerpainting'],
      Likes_LOTR: true,
    },
    {
      name: 'kc',
      hobbies: ['rugby', 'picnics'],
      Likes_LOTR: true,
    },
    {
      name: 'asad',
      hobbies: ['jam making', 'stargazing'],
      Likes_LOTR: true,
    },
    {
      name: 'joe',
      hobbies: ['folder structure', 'lotr cosplay'],
      Likes_LOTR: true,
    },
    {
      name: 'gandalf',
      hobbies: ['blowing smoke rings', 'fireworks'],
      Likes_LOTR: true,
    },
  ];

  const result4 = userFunc(testArray4);
  if (
    !Array.isArray(result4) ||
    result4.length !== 7 ||
    !result4.every((obj) => {
      return Object.keys(obj).includes('name') && Object.keys(obj).includes('hobbies') && Object.keys(obj).includes('Likes_LOTR');
    })
  ) {
    failedTests.push(4);
  }

  return failedTests;
};

export const tiedInKnotsHandler = (userFunc: Function) => {
  const failedTests: number[] = [];

  //test case 1
  if (!userFunc) {
    return [1];
  }

  //test case 2
  const article2 = `When tieing your shoelace, we recommend a double bow.  This is a simple yet effective knot,
    that is great at maintaining stability`;

  if (userFunc(article2) !== 14) {
    failedTests.push(2);
  }

  //test case 3
  const article3 = `Sailors have always known knots.  The anchor hitch is a beauty of a knot,
    so is the old buntline hitch.`;

  if (userFunc(article3) !== 0) {
    failedTests.push(3);
  }

  //test case 4
  const article4 = `Alexander the Great was not a knot enthusiast.  He used his sword to unravel the
    legendary Gordian Knot from an oxcart and so become ruler of Phrygia.  Admittedly his large army helped.  
    `;

  if (userFunc(article4) !== 9) {
    failedTests.push(4);
  }

  return failedTests;
};
