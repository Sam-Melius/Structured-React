import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/user';

export default function Home() {
  const { loggedIn } = useAuth();

  return (
    <>
          <Link to="/register">Create Account</Link>
          {' or '}
          <Link to="/login">Sign In</Link>
        </>
  )
}
