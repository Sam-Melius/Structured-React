import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function AuthButton({ className }) {
  const { loggedIn, signOut } = useAuth();

  return (
    <>
      {loggedIn ? (
        <button className={className} onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <Link to="/login" className={className}>
          <button>Sign In</button>
        </Link>
      )}
    </>
  );
}
