import { fibonnaciFunTimeHandler, friendFilterHandler, tiedInKnotsHandler } from './kataHandlerFunctions';
import { kataProblemStatements } from './kataProblemStatements';

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
    problemStatement: kataProblemStatements[0],
    starterCode: `function fibonnaciFunTime(n) {
	//Do not edit function name or first line
	//Write all your code here between the curly braces
	//or you will fail the tests!
};`,
    starterFunctionName: 'fibonnaciFunTime',
    handlerFunction: fibonnaciFunTimeHandler,
    difficulty: 'Easy',
    category: 'Maths',
  },
  {
    id: 1,
    title: 'Friend Filter',
    problemStatement: kataProblemStatements[1],
    starterCode: `function friendFilter(friends) {
	//Do not edit function name or first line
	//Write all your code here between the curly braces
	//or you will fail the tests!
};`,
    starterFunctionName: 'friendFilter',
    handlerFunction: friendFilterHandler,
    difficulty: 'Easy',
    category: 'Arrays and Objects',
  },
  {
    id: 2,
    title: 'Tied in Knots',
    problemStatement: kataProblemStatements[2],
    starterCode: `function tiedInKnots(str) {
	//Do not edit function name or first line
	//Write all your code here between the curly braces
	//or you will fail the tests!		
};`,
    starterFunctionName: 'tiedInKnots',
    handlerFunction: tiedInKnotsHandler,
    difficulty: 'Moderate',
    category: 'Strings',
  },
];
