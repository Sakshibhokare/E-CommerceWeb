import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import{Routes, Route} from 'react-router-dom';
import Product1 from './modules/Product1';
const App = ()=> {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products/:id" element={<Product1></Product1>}></Route>
      </Routes>
      
      <Footer></Footer>


    </div>
  );
};

export default App;
