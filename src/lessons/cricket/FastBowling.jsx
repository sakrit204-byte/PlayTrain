import { useState } from "react";
import "./styles/fastBowling.css";

export default function FastBowling(){

const [speed,setSpeed] = useState(130);
const [length,setLength] = useState("good");
const [play,setPlay] = useState(false);

function getBounce(){

if(length === "yorker") return "20px";
if(length === "good") return "60px";
if(length === "short") return "100px";

}

return(

<div className="lesson-page">

<section className="lesson-hero">

<h1>Fast Bowling Lab</h1>

<p>
Welcome to the Fast Bowling Experiment Lab. Adjust bowling speed and
delivery length to observe how a fast bowler can challenge the batter.
</p>

</section>


{/* CONTROLS */}

<section className="lesson-section">

<h2>Experiment Controls</h2>

<div className="bowling-controls">

<label>

Speed: <b>{speed} km/h</b>

<input
type="range"
min="110"
max="150"
value={speed}
onChange={(e)=>setSpeed(e.target.value)}
/>

</label>


<select
value={length}
onChange={(e)=>setLength(e.target.value)}
>

<option value="yorker">Yorker</option>
<option value="good">Good Length</option>
<option value="short">Short Ball</option>

</select>


<button
className="demo-btn"
onClick={()=>setPlay(!play)}
>

{play ? "Reset Bowl" : "Bowl"}

</button>

</div>

</section>



{/* ANIMATION */}

<section className="lesson-section">

<h2>Bowling Simulation</h2>

<div className="bowling-ground">

<div
className={`ball ${play ? "deliver" : ""}`}
style={{
animationDuration:`${1.5 - (speed-110)/80}s`,
bottom:getBounce()
}}
></div>

<div className="pitch-line"></div>

</div>

</section>



{/* FUN FACTS */}

<section className="lesson-section">

<h2>Fast Bowling Secrets</h2>

<div className="info-grid">

<div className="info-card">

<h3>Speed</h3>

<p>
Elite fast bowlers deliver between 135–150 km/h.
Speed combined with accuracy makes deliveries
extremely difficult to play.
</p>

</div>


<div className="info-card">

<h3>Seam Position</h3>

<p>
A straight seam can cause the ball to deviate
after pitching, creating unpredictable movement.
</p>

</div>


<div className="info-card">

<h3>Bounce</h3>

<p>
Short deliveries bounce higher and force the batter
to play uncomfortable shots.
</p>

</div>

</div>

</section>


{/* FUN CHALLENGE */}

<section className="lesson-summary">

<h2>Challenge</h2>

<p>
Try setting the speed to 150 km/h and bowl a short ball.
Imagine facing that delivery without protective gear!
Fast bowling is as much about intimidation as skill.
</p>

</section>

</div>

);

}