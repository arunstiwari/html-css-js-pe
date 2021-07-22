import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserPage from "./components/UserPage";
import AdminPage from "./components/AdminPage";
import ModeratorPage from "./components/ModeratorPage";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/mod" component={ModeratorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
