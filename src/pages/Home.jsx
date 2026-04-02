import Hero from "../components/Hero";
import Selling from "../components/Selling";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import "../styles/hero.css";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Selling />
      <FinalCTA />
      <Footer />
    </div>
  );
}