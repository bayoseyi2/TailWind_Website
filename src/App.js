import Navbar from "./components/Navbar";
import Home  from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";



function App() {
  return (
    <div>
      <Navbar/>
      <div className="top-[80px] absolute">
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact/>
          
          
      </div>
        
              
           
    </div>
  );
}

export default App;
