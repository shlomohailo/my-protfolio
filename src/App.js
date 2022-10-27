import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import Home from "./components/pages/Home";
import NavBar from "./components/features/NavBar";
import Portfolio from "./components/pages/Portfolio";
import SocialLinks from "./components/features/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience/>
      <Contact/>
      <SocialLinks />
    </div>
  );
}

export default App;
