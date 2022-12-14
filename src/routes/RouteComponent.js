
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


//common 
import NavbarComponent from "../Components/NavbarComponent";
import CTAComponent from "../Components/CTAComponent";
import FooterComponent from "../Components/FooterComponent";
//Pages
import HomePageComponent from "../Pages/HomePageComponent";


function RouteComponent() {
  return (
    
    <div>
        <NavbarComponent/>
        <Router>
            <Route path="/" exact component={HomePageComponent} />
        </Router>
        {/* <HomePageComponent/> */}
        
        <CTAComponent/>
        <FooterComponent/>
    </div>
  )
}

export default RouteComponent