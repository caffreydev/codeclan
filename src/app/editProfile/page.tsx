'use client';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

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
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error: any) {
      alert(error.message.replace('Firebase: Error ', 'Failed signup! '));
    }
  };

  return (
    <form className='Modal-body' onSubmit={handleEditProfile}>
      <h3 className='Modal-heading'>Edit Profile</h3>
      <div className='flex flex-col gap-5'>
        <label className='relative block w-full rounded-md border border-grey-200 focus-within:border-grey-100'>
          <input
            type='text'
            name='username'
            id='username'
            className='peer w-full border-none bg-transparent p-3 text-sm text-grey-100 outline-none placeholder:text-transparent'
            placeholder='Joe Codes'
            value={inputs.username}
            onChange={handleChangeInputs}
          />
          <span className='pointer-events-none absolute start-2 top-0 -translate-y-1/2 rounded bg-grey-300 px-1 text-xs text-grey-200 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-100'>
            Your Username
          </span>
        </label>

        <label className='relative block w-full rounded-md border border-grey-200 focus-within:border-grey-100'>
          <input
            type='url'
            name='profileURL'
            id='profileURL'
            className='peer w-full border-none bg-transparent p-3 text-sm text-grey-100 outline-none placeholder:text-transparent'
            placeholder='https://photobucket.com/myface.jpg'
            value={inputs.profileURL}
            onChange={handleChangeInputs}
          />
          <span className='pointer-events-none absolute start-2 top-0 -translate-y-1/2 rounded bg-grey-300 px-1 text-xs text-grey-200 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-100'>
            Your ProfileURL
          </span>
        </label>

        <button type='submit' className='rounded bg-primary px-4 py-2 text-grey-100 hover:bg-opacity-80'>
          Edit
        </button>
      </div>
    </form>
  );
}
