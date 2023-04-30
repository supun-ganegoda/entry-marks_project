import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Application from "./components/pages/Application";
import ChildDetails from "./components/forms/ChildDetails";
import Home from "./components/pages/Home";
import RegistrationForm from "./components/forms/RegistrationForm";
import AboutUs from "./components/pages/AboutUs";
import LocationProvider from "./components/context/LocationContext";
import CategorySelector from "./components/CategorySelector";
import SideBar from "./components/SideBar";
import CategoryHolder from "./components/category-forms/CategoryHolder";
import FormsProvider from "./components/context/FormContext";

function App() {
  return (
    <LocationProvider value={{ lat: "", lng: "" }}>
      <FormsProvider value={{ selectedForms: "null" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/applications" element={<Application />} />
            <Route path="/child-details" element={<ChildDetails />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/categorySelector" element={<CategorySelector />} />
            <Route path="/sidebar" element={<SideBar />} />
            <Route path="/categoryHolder" element={<CategoryHolder />} />
          </Routes>
        </Router>
      </FormsProvider>
    </LocationProvider>
  );
}

export default App;
