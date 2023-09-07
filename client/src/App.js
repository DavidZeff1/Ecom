import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import {Routes,Route} from 'react-router-dom';

function App() {
 
  return (
   <Routes>
      <Route path ='/' element ={<Login/>}/>
      <Route path ='/SignUp.js' element ={<SignUp/>}/>
      <Route path ='/HomePage.js' element ={<HomePage/>}/>
  </Routes>
  );
}

export default App;

