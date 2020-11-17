import Login from './component/login'
import Profile from './component/profile'
import Layout from './component/layout'
import Posts from './component/post'
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path="/lay" render={props => <Layout {...props} />} />
        {/* <Route exact path='/post' component={Posts}/>
        <Route exact path='/profile' component={Profile}/> */}

      </Switch>

    </div>

  
  );
}

export default App;
