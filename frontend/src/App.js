import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/Navbar";
import Application from "./components/pages/Application";
import ChildDetails from "./components/forms/ChildDetails";
import Home from "./components/pages/Home";
import RegistrationForm from "./components/forms/RegistrationForm";
import AboutUs from "./components/pages/AboutUs";
import LocationProvider from "./components/context/LocationContext";
import CategorySelector from "./components/CategorySelector";
import SideBar from "./components/SideBar";
import CatHolder from "./components/category-forms/CatHolder";
import FormsProvider from "./components/context/FormContext";
import LoginForm from "./components/forms/LoginForm";
import SchoolCountProvider from "./components/context/SchoolCountContext";
import SchoolProvider from "./components/context/SelectedSchoolsContext";
import { MarksProvider } from "./components/context/MarksContext";
import PDFResult from "./components/pdf/PDFResult";

function App() {
  return (
    <LocationProvider value={{ lat: "", lng: "" }}>
      <FormsProvider value={{ selectedForms: "null" }}>
        <SchoolCountProvider value={[]}>
          <SchoolProvider value={[]}>
            <MarksProvider>
              <Router>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/applications" element={<Application />} />
                  <Route path="/child-details" element={<ChildDetails />} />
                  <Route path="/register" element={<RegistrationForm />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route
                    path="/categorySelector"
                    element={<CategorySelector />}
                  />
                  <Route path="/sidebar" element={<SideBar />} />

                  <Route path="/catHolder" element={<CatHolder />} />

                  <Route path="/login-form" exact element={<LoginForm />} />

                  <Route path="/pdf-report" exact element={<PDFResult />} />
                  {/* Add the catch-all route for 404 Page Not Found */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Router>
            </MarksProvider>
          </SchoolProvider>
        </SchoolCountProvider>
      </FormsProvider>
    </LocationProvider>
  );
}

export default App;
