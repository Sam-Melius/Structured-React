import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function Home() {
  const { loggedIn } = useAuth();

  return (
    <>
    <p>
      Notes:
      <Link to='/notes'>Make a note</Link>
    </p>
          {loggedIn ? (
        <Link to="/profile">View your profile</Link>
      ) : (
        <>
          <Link to="/register">Create Account</Link>
          {' or '}
          <Link to="/login">Sign In</Link>
        </>
      )}
        </>
  )
}
