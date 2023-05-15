import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Memory from './pages/Memory';
import Event from './pages/Event';


function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/sign-up'} element={<SignUp/>}/>
      <Route path={'/sign-in'} element={<SignIn/>}/>
      <Route path={'/memories'} element={<Memory/>}/>
      <Route path={'/event'} element={<Event/>}/>
    </Routes>
    </div>
  );
}

export default App;
