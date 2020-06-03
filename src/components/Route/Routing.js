import React,{lazy} from 'react'
import {Switch, Route} from 'react-router-dom';
import FooterSection from '../common/FooterSection';
import NavigationTop from '../common/NavigationTop';
import NotFound from '../pages/NotFound';

const Home = lazy(() => import('../pages/Home'));
const Aboutus = lazy(() => import('../pages/Aboutus'));
//import Aboutus from './pages/Aboutus'

function Routing() {
    return (
        <>
     <NavigationTop />
    <Switch>      
    <Route exact={true} path="/"  component={Home} />
    <Route  path="/Aboutus"  component={Aboutus} />
    <Route path="*" component={NotFound} />
    </Switch>
    <FooterSection />

        </>
    )
}

export default Routing
