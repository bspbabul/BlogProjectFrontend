import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Pagess/About';
import Service from './Pagess/Service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './Pagess/user-routes/userDashboard';
import PrivateRoute from './Components/PrivateRoute';
import ProfileInfo from './Pagess/user-routes/profileInfo';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/user' element={<PrivateRoute />}>
          <Route path='dashboard' element={<UserDashboard />} />
          <Route path='profile-info' element={<ProfileInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
