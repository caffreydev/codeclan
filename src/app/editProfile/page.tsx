'use client';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Wrapper from '../components/Wrapper';
import { User } from '@/types/firestoreTypes';
import { doc, setDoc } from 'firebase/firestore';
import { useGetUser } from '@/Utils/useGetUser';

export default function editProfile() {
  const [updateProfile, profileUpdating, profileUpdateError] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);

  const [inputs, setInputs] = useState({
    username: '',
    profileURL: '',
    Github: '',
    Bio: '',
  });
  const [userRetrieved, setUserRetrieved] = useState(false);
  const currUserTableEntry = useGetUser(user?.uid as string, setUserRetrieved) as User;

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, Bio: e.target.value }));
  };

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userTableEntry: User = {
      ...currUserTableEntry,
    };

    try {
      if (inputs.username && !inputs.profileURL) {
        updateProfile({ displayName: inputs.username });
        userTableEntry.displayName = inputs.username;
      } else if (inputs.profileURL && !inputs.username) {
        updateProfile({ photoURL: inputs.profileURL });
        userTableEntry.photoUrl = inputs.profileURL;
      } else if (inputs.username && inputs.profileURL) {
        updateProfile({
          displayName: inputs.username,
          photoURL: inputs.profileURL,
        });
        userTableEntry.displayName = inputs.username;
        userTableEntry.photoUrl = inputs.profileURL;
      }

      if (inputs.Bio) {
        userTableEntry.Bio = inputs.Bio;
      }
      if (inputs.Github) {
        userTableEntry.Github = inputs.Github;
      }

      const ref = await setDoc(doc(firestore, 'users', userTableEntry.userId), userTableEntry);

      return toast.success('Your account has been edited!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    } catch (error: any) {
      toast.error('Failed to edit account, maybe try again later!', {
        position: 'bottom-center',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  if (!userRetrieved) return <h1 className='text-2xl'>Loading ...</h1>;

  if (currUserTableEntry.Bio) {
    setInputs((prev) => ({ ...prev, Bio: currUserTableEntry.Bio }));
  }

  return (
    <form onSubmit={handleEditProfile}>
      <Wrapper>
        <h2 className='my-7 text-3xl font-bold'>Edit Profile</h2>
        <div className='flex flex-col gap-5 rounded-lg border border-grey-600 bg-grey-700 p-4'>
          <label className='label-Modal'>
            <input
              value={inputs.username}
              type='text'
              name='username'
              id='username'
              className='input-Modal peer'
              placeholder='Joe Codes'
              onChange={handleChangeInputs}
            />
            <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
              Your Username
            </span>
          </label>

          <label className='label-Modal'>
            <input
              value={inputs.profileURL}
              type='url'
              name='profileURL'
              id='profileURL'
              className='input-Modal peer'
              onChange={handleChangeInputs}
              placeholder='imgbucket.com/demo.jpg'
            />
            <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
              URL path for your profile picture
            </span>
          </label>

          <label className='label-Modal'>
            <input value={inputs.Github} type='text' name='Github' id='Github' className='input-Modal peer' placeholder='' onChange={handleChangeInputs} />
            <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
              Your Github Username
            </span>
          </label>

          <label className='label-Modal'>
            <textarea rows={4} name='Github' id='Github' value={inputs.Bio} className='input-Modal peer' placeholder='Your Bio:' onChange={handleChangeBio} />
            <span className='span-Modal peer-placeholder-shown:top text-grey-400 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
              Your Bio
            </span>
          </label>

          <button type='submit' className='rounded bg-primary px-4 py-2 text-grey-100 hover:bg-opacity-80'>
            Edit
          </button>
        </div>
      </Wrapper>
    </form>
  );
}
