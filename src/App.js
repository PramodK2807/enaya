import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import BrokerPortal from "./Components/OurServices/BrokerPortal";
import Endorse from "./Components/OurServices/Endorse";
import MobileApp from "./Components/OurServices/MobileApp";
import VisaExtension from "./Components/OurServices/VisaExtension";
import InvestorRelation from "./Components/InvestorRelation/InvestorRelation";
import ReportFraud from "./Components/ContactUs/ReportFraud";
import Faq from "./Components/ContactUs/Faq";
import AboutUs from "./Components/AboutUs/AboutUs";
import MyProfile from "./Components/Profile/MyProfile";
import EditProfile from "./Components/Profile/EditProfile";
import SmePlan from "./Components/Home/SmePlan";
import CorporatePlan from "./Components/Home/CorporatePlan";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Terms from "./Components/Terms";
import Desclaimer from "./Components/Desclaimer";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import HelpAndSupport from "./Components/ContactUs/HelpAndSupport";
import GetQuote from "./Components/GetQuote";
import MyPolicyBenefits from "./Components/Profile/MyPolicyBenefits";
import ProvideNetwork from "./Components/ProvideNetwork";
import NetworkProvider from "./Components/NetworkProvider";
import SelectYourAccount from "./Components/Auth/SelectYourAccount";
import ClaimManagement from "./Components/ClaimManagement/ClaimManagement";
import NewClaim from "./Components/ClaimManagement/NewClaim";
import PolicyInfo from "./Components/Profile/PolicyInfo";
import VisitVisa from "./Components/OurProducts/Individual/VisitVisa";
import RegisterComplaint from "./Components/ContactUs/RegisterComplaint";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Routes>
      <Route exact path="*" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register-user" element={<Register />} />
      {/* <Route exact path="/login" element={<Login />} /> */}

      <Route exact path="/sme-plan" element={<SmePlan />} />
      <Route exact path="/corporate-plan" element={<CorporatePlan />} />
      <Route exact path="/visa-services" element={<VisitVisa />} />
      <Route
        exact
        path="/our-services/broker-portal"
        element={<BrokerPortal />}
      />
      <Route
        exact
        path="/our-services/endorsement-portal"
        element={<Endorse />}
      />
      <Route exact path="/our-services/mobile-app" element={<MobileApp />} />
      <Route
        exact
        path="/our-services/visit-visa-extension"
        element={<VisaExtension />}
      />
      <Route exact path="/investor-relation" element={<InvestorRelation />} />
      <Route exact path="/contact-us/report-fraud" element={<ReportFraud />} />
      <Route exact path="/contact-us/faq" element={<Faq />} />
      <Route
        exact
        path="/contact-us/register-complaints"
        element={<RegisterComplaint />}
      />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/profile" element={<MyProfile />} />
      <Route exact path="/edit-profile" element={<EditProfile />} />
      <Route exact path="/policy-benefits" element={<MyPolicyBenefits />} />
      <Route exact path="/policy-info" element={<PolicyInfo />} />
      <Route exact path="/terms-and-conditions" element={<Terms />} />
      <Route exact path="/disclaimer" element={<Desclaimer />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/help-&-support" element={<HelpAndSupport />} />
      <Route exact path="/get-quote" element={<GetQuote />} />
      <Route exact path="/claim-management" element={<ClaimManagement />} />
      <Route exact path="/claim-management/add-new" element={<NewClaim />} />
      <Route exact path="/provide-network" element={<ProvideNetwork />} />
      <Route exact path="/network-provider" element={<NetworkProvider />} />
      <Route
        exact
        path="/select-your-account"
        element={<SelectYourAccount />}
      />
    </Routes>
  );
}

export default App;
