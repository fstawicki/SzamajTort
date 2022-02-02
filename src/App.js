import About from "./components/AboutUs/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroPage from "./components/HeroPage/HeroPage";
import Navbar from "./components/Navbar/Navbar";
import Order from "./components/Order/Order";
import "./styleApp.css";




function App() {
  return (
    <div className="App">
      <HeroPage> 
        <Navbar />
      </HeroPage>
      <About />
      <Order />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
