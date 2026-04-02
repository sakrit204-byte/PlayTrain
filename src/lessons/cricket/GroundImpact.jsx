import { useEffect } from "react";
import "./styles/cricketLessons.css";

export default function GroundImpact(){

useEffect(()=>{

const items = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

items.forEach(el=>observer.observe(el));

},[]);

return(

<div className="lesson-page">

{/* HERO */}

<section className="lesson-hero fade-in">

<h1>Impact of Ground Surface on Ball Behavior</h1>

<p>
In cricket, the pitch and ground surface play a major role in determining
how the ball behaves after bouncing. Factors like hardness, grass coverage,
moisture, and soil composition influence bounce, speed, spin, and swing.
Understanding these conditions helps players adapt their strategies during
a match.
</p>

</section>


{/* HARD GROUNDS */}

<section className="impact-section fade-in">

<h2>Hard and Dry Grounds</h2>

<div className="impact-grid">

<div className="impact-card">

<h3>Characteristics</h3>

<ul>
<li>Hard compact surface</li>
<li>Minimal moisture</li>
<li>Firm bounce</li>
</ul>

</div>


<div className="impact-card">

<h3>Ball Behaviour</h3>

<ul>
<li>Ball travels faster</li>
<li>High and predictable bounce</li>
<li>Less grip on surface</li>
</ul>

</div>


<div className="impact-card">

<h3>Who Benefits?</h3>

<ul>
<li>Fast bowlers</li>
<li>Aggressive batters</li>
<li>Teams chasing high scores</li>
</ul>

</div>

</div>

</section>



{/* SOFT GROUNDS */}

<section className="impact-section fade-in">

<h2>Soft or Damp Grounds</h2>

<div className="impact-grid">

<div className="impact-card">

<h3>Characteristics</h3>

<ul>
<li>Moist soil</li>
<li>Less compact surface</li>
<li>Energy absorption</li>
</ul>

</div>


<div className="impact-card">

<h3>Ball Behaviour</h3>

<ul>
<li>Ball slows after bouncing</li>
<li>Lower bounce</li>
<li>More swing in air</li>
</ul>

</div>


<div className="impact-card">

<h3>Who Benefits?</h3>

<ul>
<li>Swing bowlers</li>
<li>Technical batters</li>
<li>Teams playing defensively</li>
</ul>

</div>

</div>

</section>



{/* GRASSY GROUNDS */}

<section className="impact-section fade-in">

<h2>Grassy Surfaces</h2>

<div className="impact-grid">

<div className="impact-card">

<h3>Characteristics</h3>

<ul>
<li>Thick grass cover</li>
<li>Higher friction</li>
<li>Cooler conditions</li>
</ul>

</div>


<div className="impact-card">

<h3>Ball Behaviour</h3>

<ul>
<li>Ball seams after bouncing</li>
<li>Movement off pitch</li>
<li>Unpredictable bounce</li>
</ul>

</div>


<div className="impact-card">

<h3>Who Benefits?</h3>

<ul>
<li>Seam bowlers</li>
<li>Teams bowling first</li>
<li>Disciplined fielding sides</li>
</ul>

</div>

</div>

</section>



{/* DUSTY GROUNDS */}

<section className="impact-section fade-in">

<h2>Dusty or Dry Surfaces</h2>

<div className="impact-grid">

<div className="impact-card">

<h3>Characteristics</h3>

<ul>
<li>Loose soil</li>
<li>Little grass</li>
<li>Surface deteriorates</li>
</ul>

</div>


<div className="impact-card">

<h3>Ball Behaviour</h3>

<ul>
<li>Ball grips surface</li>
<li>Spin increases</li>
<li>Lower bounce</li>
</ul>

</div>


<div className="impact-card">

<h3>Who Benefits?</h3>

<ul>
<li>Spin bowlers</li>
<li>Teams playing long formats</li>
<li>Strategic captains</li>
</ul>

</div>

</div>

</section>



{/* BALL DEMO */}

<section className="impact-demo fade-in">

<h2>Visual Example: Bounce Difference</h2>

<p>
The same delivery can behave very differently depending on the
ground surface. Hard pitches produce fast bouncing balls while
soft or dusty surfaces slow the ball and reduce bounce.
</p>

<div className="bounce-demo">

<div className="bounce hard"></div>
<div className="bounce soft"></div>
<div className="bounce spin"></div>

</div>

</section>



{/* SUMMARY */}

<section className="lesson-summary fade-in">

<h2>Key Insight</h2>

<p>
Successful teams always analyze ground conditions before a match.
Captains adjust field placements, bowlers modify their lengths,
and batters adapt their shot selection depending on how the pitch
and outfield behave.
</p>

</section>

</div>

);

}