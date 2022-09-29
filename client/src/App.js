import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import Main from './components/Main';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import Register from './components/Register';
import Edit from './components/Edit';
import Profileview from './components/Profileview';
import {Routes,Route} from "react-router-dom";
import ProfileHome from './components/ProfileHome';
import Navbaar from './components/Navbaar';

function App() {
  return (
  <>

    <Navbaar />
    <Routes>
      <Route path='/main' element={<Main />} />

      <Route path='/' element={ <ProfileHome />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/view/:id' element={< Profileview />} />     
      <Route path='/edit/:id' element={< Edit />} />

      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;