import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Application from "./components/pages/Application";
import ChildDetails from "./components/forms/ChildDetails";
import Home from "./components/pages/Home";
import RegistrationForm from "./components/forms/RegistrationForm";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Application />} />
        <Route path="/child-details" element={<ChildDetails />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
