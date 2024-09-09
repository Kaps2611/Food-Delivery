import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login'
import Signup from './screens/Signup'
import"../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (     //use for a single page website by giving path 
    <BrowserRouter>
      <Routes>
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/login' element={<Login />} /> 
        <Route exact path='/createuser' element={<Signup/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;