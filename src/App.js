import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './forms/Navbar';
import Signin from './forms/signin';
import Signup from './forms/Form';
import Home from './forms/home';



function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
        <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/signin'>
            <Signin></Signin>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
