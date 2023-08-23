import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/Navbar";
import Application from "./components/pages/Application";
import ChildDetails from "./components/forms/ChildDetails";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import LocationProvider from "./components/context/LocationContext";
import CategorySelector from "./components/CategorySelector";
import SideBar from "./components/SideBar";
import CatHolder from "./components/category-forms/CatHolder";
import FormsProvider from "./components/context/FormContext";
import SchoolCountProvider from "./components/context/SchoolCountContext";
import SchoolProvider from "./components/context/SelectedSchoolsContext";
import { MarksProvider } from "./components/context/MarksContext";
import PDFResult from "./components/pdf/PDFResult";
import { NavbarProvider } from "./components/context/NavbarContext";
import VerificationPage from "./components/pages/VerificationPage";
import TermsAndConditions from "./components/pages/Terms";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import FAQ from "./components/pages/FAQ";

function App() {
  return (
    <LocationProvider value={{ lat: "", lng: "" }}>
      <FormsProvider value={{ selectedForms: "null" }}>
        <SchoolCountProvider value={[]}>
          <SchoolProvider value={[]}>
            <MarksProvider>
              <NavbarProvider>
                <Router>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                      path="/verification"
                      exact
                      element={<VerificationPage />}
                    />
                    <Route path="/applications" element={<Application />} />
                    <Route path="/child-details" element={<ChildDetails />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/FAQ" exact element={<FAQ />} />
                    <Route
                      path="/terms"
                      exact
                      element={<TermsAndConditions />}
                    />
                    <Route
                      path="/privacy-policy"
                      exact
                      element={<PrivacyPolicy />}
                    />
                    <Route
                      path="/categorySelector"
                      element={<CategorySelector />}
                    />
                    <Route path="/sidebar" element={<SideBar />} />

                    <Route path="/catHolder" element={<CatHolder />} />

                    <Route path="/pdf-report" exact element={<PDFResult />} />
                    {/* Add the catch-all route for 404 Page Not Found */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Router>
              </NavbarProvider>
            </MarksProvider>
          </SchoolProvider>
        </SchoolCountProvider>
      </FormsProvider>
    </LocationProvider>
  );
}

export default App;
