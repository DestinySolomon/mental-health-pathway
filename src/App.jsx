import Navbar from "./components/Navigation/Navbar";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import ImpactStats from "./components/Sections/ImpactStats";
import Activities from "./components/Sections/Activities";
import Magazine from "./components/Sections/Magazine";
import CallService from "./components/Sections/CallService";
import Events from "./components/Sections/Events";
import Testimonials from "./components/Sections/Testimonials";
import Partners from "./components/Sections/Partners";
import FinalCTA from "./components/Sections/FinalCTA";
import Footer from "./components/Sections/Footer";
import BackToTopButton from "./components/UI/BackToTopButton";

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <Hero />
      <About />
      <ImpactStats />
      <Activities />
      <Magazine />
      <CallService />
      <Events />
      <Testimonials />
      <Partners />
      <FinalCTA />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
