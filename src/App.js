import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Login from './components/login';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Login/>

          </Route>
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;