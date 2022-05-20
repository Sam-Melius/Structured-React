import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { signInUser, signUpUser, signOutUser } from '../services/users';
import { getProfile, createProfile, updateProfile } from '../services/profiles';

export const useAuth = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a UserProvider');
      }

      const { user, setUser } = context;

      const loggedIn = user?.email;
    
      const signUp = async (email, password) => {
        try {
          const user = await signUpUser(email, password);
          setUser(user);
        }
        catch (err) {
          throw err;
        }
      };

      const signIn = async (email, password) => {
        try {
          const user = await signInUser(email, password);
          setUser(user);
        }
        catch (err) {
          throw err;
        }
      };

      const signOut = async () => {
        await signOutUser();
        setUser({});
      };
    
      return { user, loggedIn, signUp, signIn, signOut };
    };

    export const useUser = () => {
        const context = useContext(UserContext);
      
        if (context === undefined) {
          throw new Error('useUser must be used within a UserProvider');
        }

  const { user, profile, setProfile, loaded } = context;

  const create = async (data) => {
    try {
      const profile = await createProfile(data);
      setProfile(profile);
    }
    catch (err) {
      throw err;
    }
  };

  const update = async (data) => {
    try {
      const profile = await updateProfile(data);
      setProfile(profile);
    }
    catch (err) {
      throw err;
    }
  };

  return { user, profile, loaded, create, update };

}
