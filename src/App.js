
import './App.css';
import Registrationform from './components/registrationform';
import dashboard from './components/dashboard';
import Datepicker from './components/datepicker';
import logout from './components/logout';
import { Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <br></br>
      <Route path="/dashboard" component={dashboard}></Route>
      <Route exact path="/"  component={Registrationform}></Route>
      <Route exact path="/logout"  component={logout}></Route>
      <Route exact path="/datepicker"  component={Datepicker}></Route>
     </BrowserRouter> 
    </div>
  );
}

export default App;
