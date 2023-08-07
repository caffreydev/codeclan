'use client';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Wrapper from '../components/Wrapper';

export default function editProfile() {
  const { push } = useRouter();
  const [updateProfile, profileUpdating, profileUpdateError] = useUpdateProfile(auth);
  const [inputs, setInputs] = useState({
    username: '',
    profileURL: '',
  });

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (inputs.username && !inputs.profileURL) {
        updateProfile({ displayName: inputs.username });
      } else if (inputs.profileURL && !inputs.username) {
        updateProfile({ photoURL: inputs.profileURL });
      } else {
        updateProfile({
          displayName: inputs.username,
          photoURL: inputs.profileURL,
        });
      }
      setInputs({
        username: '',
        profileURL: '',
      });
      return toast.success('Your account has been edited!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    } catch (error: any) {
      // alert(error.message.replace('Firebase: Error ', 'Failed signup! '));
      toast.error(error.message.replace('Firebase: Error ', 'Failed sign up! '), {
        position: 'bottom-center',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  return (
    <form onSubmit={handleEditProfile}>
      <Wrapper>
        <h2 className='my-7 text-3xl font-bold'>Edit Profile</h2>
        <div className='flex flex-col gap-5 rounded-lg border border-grey-600 bg-grey-700 p-4'>
          <label className='label-Modal'>
            <input
              type='text'
              name='username'
              id='username'
              className='input-Modal peer'
              placeholder='Joe Codes'
              value={inputs.username}
              onChange={handleChangeInputs}
            />
            <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
              Your Username
            </span>
          </label>

          <label className='label-Modal'>
            <input
              type='url'
              name='profileURL'
              id='profileURL'
              className='input-Modal peer'
              placeholder='https://photobucket.com/myface.jpg'
              value={inputs.profileURL}
              onChange={handleChangeInputs}
            />
            <span className='span-Modal text-grey-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300'>
              Your ProfileURL
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
