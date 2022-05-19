import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/user';

export default function Auth() {
  const history = useHistory();
  const location = useLocation();
  const { loggedIn, signUp, signIn } = useAuth();

  const handleSubmit = async (email, password) => {
    await options.action(email, password);
    history.replace(options.redirectTo);
  };

  return (
    <section>
        <UserForm
        onSubmit={handleSubmit}
      />
    </section>
  )
}
