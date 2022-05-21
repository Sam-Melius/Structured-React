import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { UserProvider } from "./context/UserContext";
import { NotesProvider } from "./context/NotesContext";
import Auth from "./views/Auth/Auth";
import Home from "./views/Home/Home";
import ProfileView from "./views/Profile/ProfileView";
import EditProfile from './views/Profile/EditProfile';
import Header from "./components/Header/Header";
import ViewNotes from './views/Notes/ViewNotes';
import ViewNote from './views/Notes/ViewNote';
import AddNote from './views/Notes/AddNote';
import EditNote from './views/Notes/EditNote';
import CopyNote from './views/Notes/CopyNote';


export default function App() {
  return (
    <>
    <UserProvider>
      <NotesProvider>
      <Router>
        <Header />
        <Switch>
          <Route path='/login'>
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp />
          </Route>
          <PrivateRoute path="/profile/edit">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <ProfileView />
          </PrivateRoute>
          <PrivateRoute exact={true} path="/notes">
            <ViewNotes />
          </PrivateRoute>
          <PrivateRoute exact={true} path="/notes/add">
            <AddNote />
          </PrivateRoute>
          <PrivateRoute exact={true} path="/notes/:id">
            <ViewNote />
          </PrivateRoute>
          <PrivateRoute exact={true} path="/notes/:id/edit">
            <EditNote />
          </PrivateRoute>
          <PrivateRoute exact={true} path="/notes/:id/copy">
            <CopyNote />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </NotesProvider>
      
    </UserProvider>
    </>
  );
}
