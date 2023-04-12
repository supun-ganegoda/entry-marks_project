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

function App() {
  return (
    <LocationProvider value={{ lat: "", lng: "" }}>
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
        </Routes>
      </Router>
    </LocationProvider>
  );
}

export default App;
