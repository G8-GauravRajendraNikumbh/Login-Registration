import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import Welcome from './component/welcome';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="container mt-5 align-center" style={{width:"40%",borderRadius:"8px",height:"100%",backgroundColor:"lightwhite",padding:"20px",borderColor:
    "green"}}>
    <Router>
    <div className="App">
    <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route path = "/regis" component = {Registration}/>
      <Route path = "/welcome" component = {Welcome}/>
    </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
