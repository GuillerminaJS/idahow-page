// React stuff & imports
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// ...

// css imports
import './App.css';
// ...

// Other imports
import UserState from './context/user/UserState';
// ...

// Common Components imports
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
// ...

// Pages imports
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/userAuth/LoginPage';
import RegistrationFormPage from './pages/userAuth/RegistrationFormPage';
import SelectCrud from './pages/crud/SelectCrud';
import CommandsDisplay from './pages/CommandsDisplay';
import Policy from './pages/Policy';
// ...

// Crud Pages
import ManageUsers from './pages/crud/ManageUsers';
import ManageNews from './pages/crud/ManageNews';
import ManageCommands from './pages/crud/ManageCommands';
// ...
function App() {

  return (

    <div className="App">

      <UserState>
        <BrowserRouter>
        {/* Main components */}
          <Header/>
          <Routes>
            <Route element={<HomePage/>} path='/'/>
            <Route element={<SelectCrud/>} path='/crud'/>
            <Route element={<CommandsDisplay/>} path='/commandsList'/>
            <Route element={<LoginPage />} path='/login'/>
            <Route element={<RegistrationFormPage />} path='/registration'/>
            <Route element={<ManageUsers />}  path='/user-mg'/>
            <Route element={<ManageNews />}  path='/news-mg'/>
            <Route element={<ManageCommands />}  path='/commands-mg'/>
            <Route element={<Policy />}  path='/policy'/>
          </Routes>
          {/* <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
          <Footer/>
        {/* ... */}

          

        </BrowserRouter>
      </UserState>
    </div>

  );
}

export default App;
