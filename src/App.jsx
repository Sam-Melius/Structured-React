import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./context/UserContext";
import Auth from "./views/Auth";
import Home from "./views/Home";


export default function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Switch>
          <Route path='/login'>
            <Auth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
    </>
  );
}
