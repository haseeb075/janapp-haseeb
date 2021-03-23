import React from 'react';

//components
import Header from "../components/StaticComponents/Header"
import HomeMain from "../components/ReusableComponents/HomeMain";
import Footer from '../components/StaticComponents/Footer'

// pages
import About from './About'
import Contact from './Contact'
import Home from './Home'

// routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function WebsiteHome(props) {
    return (
        <React.Fragment>
                <Header />
                {/* <HomeMain> */}
                <Router>
                <Route path='/' component={Home}>
                </Route>    

                <Route path='/about' component={About}>
                </Route>    

                <Route path='/contact' component={Contact}>
                </Route>    
                {/* <HomeMain/> */}
                </Router>
                <Footer />      
      </React.Fragment>
    );
}