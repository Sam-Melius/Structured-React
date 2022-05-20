import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { UserProvider } from "./context/UserContext";
import Auth from "./views/Auth/Auth";
import Home from "./views/Home/Home";
import ProfileView from "./views/Profile/ProfileView";


export default function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Switch>
          <Route path='/login'>
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp />
          </Route>
          <PrivateRoute path="/profile">
            <ProfileView />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
    </>
  );
}
