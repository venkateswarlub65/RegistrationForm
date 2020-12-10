
import './App.css';
import Registrationform from './components/registrationform';
import Dashboard from './components/dashboard';
import Logout from './components/logout';
import { Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <br></br>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/"  component={Registrationform}></Route>
      <Route exact path="/logout"  component={Logout}></Route>
     </BrowserRouter> 
    </div>
  );
}

export default App;
