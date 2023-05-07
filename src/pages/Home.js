import { Routes, Route } from 'react-router-dom';
import Navbar from "../componets/Navbar";
import HomeCrad from "../componets/HomeCard";
import Memory from './Memory';
import SignUp from './Memory';
import SignIn from './Memory';

function Home() {
    return (
        <div>
            <Navbar/>
            <Routes>
            <Route path={'/'} element={<HomeCrad/>}/>
            <Route path={'/memories'} element={<Memory/>}/>
            {/* <Route path={'/sign-up'} element={<SignUp/>}/>
            <Route path={'/sign-in'} element={<SignIn/>}/> */}
            </Routes>
        </div>
      
    );
  }
  
  export default Home;