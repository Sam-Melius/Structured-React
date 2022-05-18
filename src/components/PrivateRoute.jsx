import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks/user';

export default function PrivateRoute({ children, ...rest }) {
  const { loggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
