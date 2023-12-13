import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import Checkout from './components/checkout/Checkout.jsx'
import DetailPage from './components/DetailPage.jsx';

const root = createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<App/>} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
