import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes,Route,Link,NavLink} from "react-router-dom";
// components

import About from 'pages/About';

import Home from 'pages/Home';


const App = () => {
  return (
    
    <div className='container mx-auto'>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/About' element= {<About/>} />
      </Routes>
      
   
    </div>
    
  )
}

export default App
