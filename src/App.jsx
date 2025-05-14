import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactUs";
import AboutScreen from "./screens/AboutScreen";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
