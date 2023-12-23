import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TourExperience from "./components/TourExperience";
import Intro from "./components/Intro";
import OurMission from "./components/OurMission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-4 md:px-8 lg:px-20">
        <Intro/>
        <TourExperience />
        <OurMission/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
