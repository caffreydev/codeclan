import React from 'react';
import { Loader } from './components/Loader';

type loadingProps = {};

const loading: React.FC<loadingProps> = () => {
  return <Loader fixed className='text-primary' width={60} height={60} />;
};
export default loading;
