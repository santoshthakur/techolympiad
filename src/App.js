import React,{ Suspense, lazy } from 'react';
//import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import main from './components/css/main.css'
const Home = lazy(() => import('./components/pages/Home'));
const RenderLoader= ()=><h1>Loading...</h1>;
//import './App.css';

function App() {
  return (
    <Suspense fallback={RenderLoader()}>
    <Home />
    </Suspense>
    );
}  

export default App;
