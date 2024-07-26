import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx"; // Import the ScrollToTop component
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";

import Jobs from "./pages/Jobs.jsx";
import PostResume from "./components/Jobs/PostResume.jsx";
import CurrentOpening from "./components/Jobs/Openings/Opening.jsx";
import Employer from "./pages/Employer.jsx";
import College from "./pages/College.jsx";
import CampusToCubicle from "./pages/CampusToCubicle.jsx";
import Affiliate from "./pages/Affiliate.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header/Header.jsx"; // Import Header
import Footer from "./components/Footer.jsx"; // Import Footer
import CollegeForm from "./components/CampusToCubicle/CollegeForm.jsx";
import CompanyForm from "./components/CampusToCubicle/CompanyForm.jsx";
import OnCampus from "./components/Service/OnCampus/OnCampus.jsx";
import OffCampus from "./components/Service/OffCampus/OffCampus.jsx";
import Seminar from "./components/Service/Seminar/Seminar.jsx"
import Counselling from "./components/Service/Counselling/Counselling.jsx"
import Workforce from "./components/Service/Workforce/Workforce.jsx"
import CareerCraft from "./components/Service/CareerCraft/CareerCraft.jsx"
import AffiliateForm from "./components/Affiliate/AffiliateForm.jsx";



const NotFound = () => <div>Page Not Found</div>; // Fallback component

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Header /> {/* Render Header at the top of all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/oncampus" element={<OnCampus />} />
          <Route path="/offcampus" element={<OffCampus />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/careercraft" element={<CareerCraft />} />
          <Route path="/workforce" element={<Workforce />} />
        
         
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/post-resume" element={<PostResume />} />
          <Route path="/jobs/current-opening" element={<CurrentOpening />} />

          <Route path="/employer" element={<Employer />} />

          <Route path="/college" element={<College />} />

          <Route path="/campus-to-cubicle" element={<CampusToCubicle />} />
          <Route path="/college-form" element={<CollegeForm />} />
          <Route path="/company-form" element={<CompanyForm />} />
          

          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/affiliate-form" element={<AffiliateForm />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
        <Footer /> {/* Render Footer at the bottom of all pages */}
      </Router>
    </ChakraProvider>
  );
};

export default App;
