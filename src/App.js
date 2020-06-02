import React,{ Suspense} from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Routers } from 'react-router-dom'
import Routing from './components/Route/Routing'
import 'bootstrap/dist/css/bootstrap.min.css';
import main from './components/css/main.css';
const RenderLoader= ()=><h1>Loading...</h1>;

//import './App.css';

function App() {
  return (
    <Routers>
    <Suspense fallback={RenderLoader()}>
      <Routing />
    </Suspense>
    </Routers>
    );
}  

export default App;
