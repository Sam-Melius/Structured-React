import { Link } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useUser } from '../../hooks/user';

export default function ProfileView() {
  const { user, profile, loaded, create } = useUser();

  if(!loaded) return null;

  const hasProfile = user && profile;

  const handleCreate = async (profile) => {
      await create(profile);
  };

  return hasProfile 
    ? <ShowProfile profile={profile} /> 
    : <CreateProfile 
      email={user.email} 
      onCreate={handleCreate} 
    />;
}

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

  function ShowProfile({ profile }) {
    return (
      <>
        <Link to="/profile/edit">
          <button>Edit Profile</button>
        </Link>
        <Profile profile={profile} />
      </>
    );  

}
