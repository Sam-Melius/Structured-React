import { Redirect, useHistory, useLocation, Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useAuth } from '../../hooks/user';

const PROFILE_PATH = '/profile';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const location = useLocation();
  const { loggedIn, signUp, signIn } = useAuth();

  const signUpOptions = {
    action: signUp,
    redirectTo: '/confirm-email',
    label: 'Sign Up',
    message: <>Already have an account? <Link to="/login">Sign In</Link></>
  };

  const signInOptions = {
    action: signIn,
    redirectTo: location.state?.from?.pathname || PROFILE_PATH,
    label: 'Sign In',
    message: <>Need an account? <Link to="/register">Sign Up</Link></>
  };

  const options = isSigningUp ? signUpOptions : signInOptions;

  const handleSubmit = async (email, password) => {
    await options.action(email, password);
    history.replace(options.redirectTo);
  };

  if (loggedIn) return <Redirect to={PROFILE_PATH} />;

  return (
    <section>
        <UserForm
        onSubmit={handleSubmit}
      />
      <p>{options.message}</p>
    </section>
  )
}
