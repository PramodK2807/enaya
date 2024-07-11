import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import BrokerPortal from "./Components/OurServices/BrokerPortal";
import Endorse from "./Components/OurServices/Endorse";
import MobileApp from "./Components/OurServices/MobileApp";
import VisaExtension from "./Components/OurServices/VisaExtension";
import InvestorRelation from "./Components/InvestorRelation/InvestorRelation";
import ReportFraud from "./Components/ContactUs/ReportFraud";
import Faq from "./Components/ContactUs/Faq";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-services/broker-portal" element={<BrokerPortal />} />
      <Route path="/our-services/endorsement-portal" element={<Endorse />} />
      <Route path="/our-services/mobile-app" element={<MobileApp />} />
      <Route path="/our-services/visit-visa-extension" element={<VisaExtension />} />
      <Route path="/investor-relation" element={<InvestorRelation />} />
      <Route path="/contact-us/report-fraud" element={<ReportFraud />} />
      <Route path="/contact-us/faq" element={<Faq />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
