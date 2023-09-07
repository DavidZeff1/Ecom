import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import AddProduct from './components/AddProduct';
import {Routes,Route} from 'react-router-dom';

function App() {
 
  return (
   <Routes>
      <Route path ='/' element ={<Login/>}/>
      <Route path ='/signup' element ={<SignUp/>}/>
      <Route path ='/homepage' element ={<HomePage/>}/>
      <Route path ='/addproduct' element ={<AddProduct/>}/>
  </Routes>
  );
}

export default App;

