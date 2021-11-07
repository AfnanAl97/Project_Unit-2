import Header from './components/Header';
import Productpage from './components/Productpage';
import Form from './components/Form';
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Form />
    {/* <Productpage/> */}
    </BrowserRouter>
  );
}

export default App;
