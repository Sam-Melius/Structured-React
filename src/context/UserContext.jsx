import { createContext, useEffect, useState } from 'react';
import { getUser } from '../services/users';
import { getProfile } from '../services/profiles';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = getUser();
    const [user, setUser] = useState(
        currentUser ? { id: currentUser.id, email: currentUser.email } : {}
    );
    const [profile, setProfile] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      setLoaded(false);

      try {
        if(!user) return setProfile();

        const profile = await getProfile(user.id);
        setProfile(profile);
      }
      catch(err) {
        setProfile(null);
      }
      finally {
        setLoaded(true);
      }
    };

    loadProfile();  
  }, [user]);

  const value = { user, setUser, profile, loaded, setProfile, };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
