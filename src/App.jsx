import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TourExperience from "./components/TourExperience";
import Intro from "./components/Intro";
import OurMission from "./components/OurMission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Teams from "./components/Teams";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <div className="px-4 md:px-8 lg:px-20 ">
        <TourExperience />
      </div>
      <div className="bg-green-500 pt-4 pb-16 px-4 md:px-8 lg:px-20">
        <OurMission />
      </div>
      <div className="px-4 md:px-8 lg:px-20 border-b pb-12 border-green-500">
        <Contact />
      </div>
      <div className="px-4 md:px-8 lg:px-20">
        <Teams />
      </div>

      <Footer />
    </div>
  );
}

export default App;
