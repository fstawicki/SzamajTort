import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar/Navbar";
import "./styleApp.css";




function App() {
  return (
    <div className="App">
      <HeroPage> 
        <Navbar />
      </HeroPage>
    </div>
  );
}

export default App;
