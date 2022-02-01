import About from "./components/AboutUs/About";
import HeroPage from "./components/HeroPage/HeroPage";
import Navbar from "./components/Navbar/Navbar";
import "./styleApp.css";




function App() {
  return (
    <div className="App">
      <HeroPage> 
        <Navbar />
      </HeroPage>
      <About />
    </div>
  );
}

export default App;
