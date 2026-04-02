import "../styles/hero.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {

const [activeSport, setActiveSport] = useState("");
const [offset, setOffset] = useState(0);

const heroRef = useRef(null);
const tickerRef = useRef(null);

const indoorSports = [
{ icon: "fa-basketball", name: "BASKETBALL" },
{ icon: "fa-chess", name: "CHESS" },
{ icon: "fa-table-tennis-paddle-ball", name: "TABLE TENNIS" },
{ icon: "fa-volleyball", name: "VOLLEYBALL" },
{ icon: "fa-dumbbell", name: "GYM" },
{ icon: "fa-badminton", name: "BADMINTON" }
];

const outdoorSports = [
{ icon: "fa-baseball", name: "CRICKET" },
{ icon: "fa-person-biking", name: "CYCLING" },
{ icon: "fa-futbol", name: "FOOTBALL" },
{ icon: "fa-boat", name: "ROWING" },
{ icon: "fa-person-running", name: "RUNNING" },
{ icon: "fa-mountain", name: "MOUNTAINEERING" }
];

useEffect(() => {

const updateLayout = () => {
  const navbar = document.querySelector("nav");

  if (navbar && heroRef.current) {
    const navHeight = navbar.offsetHeight;
    heroRef.current.style.paddingTop = navHeight + "px";
    heroRef.current.style.minHeight = `calc(100vh + ${navHeight}px)`;
  }
};

let timeout;

const handleResize = () => {
  clearTimeout(timeout);
  timeout = setTimeout(updateLayout, 100);
};

updateLayout();
window.addEventListener("resize", handleResize);

return () => window.removeEventListener("resize", handleResize);

}, []);

useEffect(() => {

const saved = localStorage.getItem("lastSportHover");
if (saved) setActiveSport(saved);

}, []);

const handleHover = (name) => {
  setActiveSport(name);
  localStorage.setItem("lastSportHover", name);
};

const handleLeave = () => {
  setActiveSport("");
};

useEffect(() => {

let animation;

const move = () => {
  setOffset((prev) => (prev <= -100 ? 0 : prev - 0.05));
  animation = requestAnimationFrame(move);
};

animation = requestAnimationFrame(move);

return () => cancelAnimationFrame(animation);

}, []);

return (
<section ref={heroRef} className="hero-section">

  <img src="/assets/bg_layout.png" className="hero-bg" alt="" />

  <div className="hero-side indoor">
    <span className="side-title">INDOOR SPORTS</span>

    {indoorSports.map((sport, index) => (
      <i
        key={index}
        className={`fa-solid ${sport.icon} sport-icon`}
        onMouseEnter={() => handleHover(sport.name)}
        onMouseLeave={handleLeave}
      />
    ))}
  </div>

  <div className="hero-center">

    <div className="spotlight"></div>

    <div className="active-sport">{activeSport}</div>

    <div
      ref={tickerRef}
      className="ticker"
      style={{ transform: `translateX(${offset}%)` }}
    >
      Practice makes the man perfect • Stay consistent • Train hard • Practice makes the man perfect •
    </div>

    <p className="hero-cta-text">Enroll our courses now</p>

    <Link to="/courses" className="hero-btn">
      Enroll Now
    </Link>

  </div>

  <div className="hero-side outdoor">

    <span className="side-title">OUTDOOR SPORTS</span>

    {outdoorSports.map((sport, index) => (
      <i
        key={index}
        className={`fa-solid ${sport.icon} sport-icon`}
        onMouseEnter={() => handleHover(sport.name)}
        onMouseLeave={handleLeave}
      />
    ))}

  </div>

</section>
);
}