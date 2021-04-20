import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Advance from "./components/advance/Advance";
import Home from "./components/home/Home";
import NoMatch from "./components/nomatch/NoMatch";
import OurClass from "./components/ourClass/OurClass";
import Self from "./components/self/Self";

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
        <Route path='/advance'>
         <Advance></Advance>
        </Route>
        <Route path='/self'>
          <Self></Self>
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
