import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, set,get } from "firebase/database";
import React, { useState, useEffect, useContext } from 'react';
import Dashboard from './Componets/Deposits';
import Home from './Componets/Home';
import BasicSection from './Componets/Sections/BasicSection';
import { BrowserRouter, MemoryRouter, Route, Routes, Navigate } from 'react-router-dom';
import SecuritySection from './Componets/Sections/SecuritySection';
import Signin from './Componets/Signin';
import { Login } from '@mui/icons-material';
import { AuthContext } from './Componets/contex/Authcontex';




function App() {
  
  const{currentUser}= useContext(AuthContext)

  const RequireAuth = ({children})=>{

    return currentUser ? children : <Navigate to = "/login"/>;
  }


console.log(currentUser);


  return (
    <>



<Routes>
<Route path='/' element={ <RequireAuth>  <Home /></RequireAuth>}></Route>
<Route path='Basic' element={ <RequireAuth><BasicSection/></RequireAuth>}></Route>
<Route path='Security' element={<RequireAuth><SecuritySection/></RequireAuth>}></Route>
<Route path='login' element={<RequireAuth><Signin/></RequireAuth>}></Route>
{/* <Route path='in' element={<Signin/>}></Route>
 */}{/*  <Route path='Login' element={<Login/>}></Route>
 */}
</Routes>



    </>
  );
}

export default App;
