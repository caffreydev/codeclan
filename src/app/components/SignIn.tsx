import React from 'react';

type SignInProps = {
    
};

const SignIn:React.FC<SignInProps> = () => {
    return (<button type="button" className="flex py-2 px-3 mr-3 text-sm bg-grey-300 rounded-sm md:mr-0 focus:ring-2 focus:ring-primary hover:opacity-80">
  Sign In</button>)
}
export default SignIn;