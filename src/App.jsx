import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./context/UserContext";


export default function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <Switch>
          <Route path='/login'></Route>
        </Switch>
      </Router>
    </UserProvider>
    </>
  );
}
