import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router} from "react-router-dom";
// import { Route,Routes } from "react-router-dom";
//import { Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../src/Asset/index.css';
import reportWebVitals from './reportWebVitals';

import Routing from './Route/Routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing></Routing>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
