import { fibonnaciFunTimeHandler, friendFilterHandler, tiedInKnotsHandler } from './kataHandlerFunctions';

export interface Kata {
  id: number;
  title: string;
  problemStatement: string;
  starterCode: string;
  starterFunctionName: string;
  handlerFunction: Function;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Fiendish';
  category: 'Arrays and Objects' | 'Strings' | 'Maths' | 'Fun';
}

export const kataLibrary: Kata[] = [
  {
    id: 0,
    title: 'Fibbonaci Funtime',
    problemStatement: `Create a function that will take a parameter, n >= 0, and generator the nth Fibbonaci number.
        Just in case you forgot what you learned in maths classes ... Fn(1) = 1, Fn(2) = 1, Fn(3) = 2, Fn(4) = 3, Fn(5) = 5, ... Fn(n + 2) = Fn(n) + Fn(n + 1)`,
    starterCode: `//Do not edit function name
function fibonnaciFunTime(n) {
// Write your code here
};`,
    starterFunctionName: 'fibonnaciFunTime',
    handlerFunction: fibonnaciFunTimeHandler,
    difficulty: 'Easy',
    category: 'Maths',
  },
  {
    id: 1,
    title: 'Friend Filter',
    problemStatement: `You have a group of friends in a friends array, each friend is an object with a number of key value pairs.
        The key that is most important is the "Likes_LOTR" key which has a boolean value.  Since you have too many friends, and have decided to reduce the size
        of your friendship group, you need to use a filter to remove all the friends that don't like Lord of the rings from the array, and hence your social circle.
        To complete the kata, return an array that contains only those friends where the "Likes_LOTR" key has value true.
        `,
    starterCode: `//Do not edit function name
function friendFilter(friends) {
// Write your code here
};`,
    starterFunctionName: 'friendFilter',
    handlerFunction: friendFilterHandler,
    difficulty: 'Easy',
    category: 'Arrays and Objects',
  },
  {
    id: 2,
    title: 'Tied in Knots',
    problemStatement: `
            You are a knot enthusiast who likes nothing better than reading about knots, you also quite like vowels
            Your task is to take an article about knots, and count the number of vowels it contains,
            however there is a catch, you only should count the vowels that are in a sentence without the word 
            knot (or Knot) included.

            e.g. "I love tieing knots. They are great." - should return 5, ignoring the first sentence.
        `,
    starterCode: `//Do not edit function name
function tiedInKnots(str) {
// Write your code here
};`,
    starterFunctionName: 'tiedInKnots',
    handlerFunction: tiedInKnotsHandler,
    difficulty: 'Moderate',
    category: 'Strings',
  },
];
