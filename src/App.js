
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body.js';
import MainSanPham from './components/MainSanPham.js';
import ItemSanPham from './components/ItemSanPham.js';
import 'bootstrap/dist/css/bootstrap.css';
import './css/dangnhap.css';
import './css/sanpham.css'
import './css/chitiet.css';
import Header from './components/Header.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
    </div>
    )
}

export default App;
