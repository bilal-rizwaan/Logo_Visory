import React from 'react';
import {Switch ,Route ,Redirect} from  'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import Logo from './Logo';
import PackagesMain from './PackagesMain';
import Portfolio from './Portfolio';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
   <Switch>
    <Route exact path='/Home' component={Home}/>
    <Route exact path='/Logo' component={Logo}/>
    <Route exact path='/PackagesMain' component={PackagesMain}/>  
    <Route exact path='/Portfolio' component={Portfolio}/>
    <Redirect to="/" />
   </Switch>
    <Footer></Footer>
    </>
  ); 
}

export default App;
