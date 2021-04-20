import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import NoMatch from "./components/nomatch/NoMatch";
import OurClass from "./components/ourClass/OurClass";

function App() {
  return (
    <div className="aap">
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/ourClass'>
          <OurClass></OurClass>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
