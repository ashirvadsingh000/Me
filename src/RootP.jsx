import React from 'react';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./index.css";
const RootP = () => {
  return (
<BrowserRouter>
<App/>
</BrowserRouter>
  );
}

export default RootP;
