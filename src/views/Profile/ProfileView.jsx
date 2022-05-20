import React from 'react';
import Profile from '../../components/Profile/Profile';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useUser } from '../../hooks/user';

export default function ProfileView() {
  const { user, profile, loaded, create } = useUser();

  if(!loaded) return null;

  const handleCreate = async (profile) => {
      await create(profile);
  };

  return (
    <CreateProfile
        email={user.email}
        onCreate={handleCreate} />
  );

  function CreateProfile({ email, onCreate }) {
    return (
        <>
        <ProfileForm
            formLabel='Create Profile'
            onSubmit={onCreate}
            email={email} />
        </>
    )

    
  }

  

}
