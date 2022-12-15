
import React from "react";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";


//common 
import NavbarComponent from "../Components/NavbarComponent";
import CTAComponent from "../Components/CTAComponent";
import FooterComponent from "../Components/FooterComponent";
//Pages
import HomePageComponent from "../Pages/HomePageComponent";
import LoginPageComponent from "../Pages/LoginPageComponent";
import RegistrationPageComponent from "../Pages/RegistrationPageComponent";
import DigitalLibraryPageComponent from "../Pages/DigitalLibraryPageComponent";


function RouteComponent() {
  return (
    <Router>
        <div>
                <NavbarComponent/>
                <Routes>
                    <Route path='/bookhub' element={<HomePageComponent/>} />
                    <Route path='/' element={<HomePageComponent/>} />
                    <Route path='/login' element={<LoginPageComponent/>} />
                    <Route path='/register' element={<RegistrationPageComponent/>} />
                    <Route path='/digital-library' element={<DigitalLibraryPageComponent/>} />
                </Routes>
                
                <CTAComponent/>
                <FooterComponent/>
            </div>
    </Router>
    
  )
}

export default RouteComponent