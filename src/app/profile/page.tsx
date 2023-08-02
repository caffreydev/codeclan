import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Wrapper from '../components/Wrapper';
import UserListKatas from '../components/UserKatasList';
import { TbProgress } from "react-icons/tb";
import { CgCheckO } from "react-icons/cg";

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (<div className='max-w-screen-xl mx-auto'>
    <Wrapper>
        <h2 className="text-3xl font-bold my-7">Profile</h2>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4 mt-6">
            <div className="h-auto rounded-lg bg-grey-300 flex justify-center items-center p-4">
            <Image alt='profile avatar' src="/profile-avatar.png" width={300} height={300} className="self-center w-52 h-52 bg-gray-300 rounded-full shrink-0"></Image>
            </div>
            <div className="h-auto rounded-lg bg-grey-300 lg:col-span-2 p-4">
                <h3 className="text-xl font-bold text-primary">Jessie 👩🏻‍💻</h3>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className="text-grey-200"><span className='text-grey-100'>email: </span>jessie@codeclan.com</p>
                        <p className="text-grey-200 text-sm"><span className='text-grey-100'>Member Since: </span> 01-08-2023</p>
                    </div>
                <div className="mt-6 flex flex-wrap gap-4 justify-center mb-4">
                    <Link href="#" className="bg-primary hover:bg-grey-200 text-grey-100 py-2 px-3 rounded transition">Message</Link>
                    <Link href="#" className="bg-primary hover:bg-grey-200 text-grey-100 py-2 px-3 rounded transition">Pair up!</Link>
                </div>
                </div>
                <hr className='border-grey-200' />
                <p className="text-xl font-bold mt-4 mb-2">Bio</p> 
                <p className="text-grey-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                suscipit.
                </p>
            </div>
        </div>
    </Wrapper>
    <Wrapper>
        <section className="grid grid-cols-1 lg:grid-cols-2 mt-3 bg-grey-300 rounded-lg">
            <div className="p-4 rounded-lg bg-grey-300">
            <div className='flex items-center'>
                <CgCheckO className="text-xl mr-1"/>
                <h3 className='text-xl p-2 text-primary '>Completed Katas</h3>
                </div>
                <UserListKatas />
            </div>
            <div className="p-4 rounded-lg bg-grey-300 ">
                <div className='flex items-center'>
                    <TbProgress className="text-xl mr-1"/>
                    <h3  className='text-xl p-2 text-primary'> Katas in progress</h3>
                </div>
                <UserListKatas />
            </div>
        </section>
    </Wrapper>
    </div>)
}
export default page;