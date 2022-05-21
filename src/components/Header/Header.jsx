import { Link } from "react-router-dom";
import { useUser, useAuth } from "../../hooks/user";
import AuthButton from "../AuthButton/AuthButton";

export default function Header() {
  const { user, profile, loaded } = useUser();
  const { loggedIn } = useAuth();

  if(loggedIn && !loaded) return null;

  return (
    <>
    <header>
    <Link to='/'>Home</Link>
    <p>
        {loggedIn ? (
            <>
            <span>Signed in as</span>
            <span> {profile?.name || user.email}</span>
            </>
        ) : (
            <span>Not signed in</span>
        )}
        <AuthButton />
    </p>
    </header>
    
    </>
  )
}
