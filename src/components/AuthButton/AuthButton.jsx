import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function AuthButton({ className }) {
  const { loggedIn, signOut } = useAuth();

  return (
    <>
      {loggedIn ? (
        <button onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      )}
    </>
  );
}
