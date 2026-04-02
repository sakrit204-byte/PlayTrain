import { useState } from "react";
import "./styles/cricketLessons.css";

export default function GripBacklift(){

const [showLift,setShowLift] = useState(false);

return(

<div className="lesson-page">

<section className="lesson-hero">

<h1>Grip & Backlift</h1>

<p>
The grip and backlift are essential fundamentals of cricket batting.
A proper grip ensures control of the bat while the backlift generates
power and timing for different shots.
</p>

</section>


{/* GRIP SECTION */}

<section className="lesson-section">

<h2>Correct Bat Grip</h2>

<div className="grip-container">

<div className="bat-handle">

<div className="hand top-hand">Top Hand</div>
<div className="hand bottom-hand">Bottom Hand</div>

</div>

</div>

<p className="grip-text">

The top hand controls the bat while the bottom hand provides
power and direction. Both hands should form a relaxed "V"
shape pointing toward the splice of the bat.

</p>

</section>


{/* BACKLIFT */}

<section className="lesson-section">

<h2>Bat Backlift Motion</h2>

<p>
The backlift prepares the bat for the downswing. A smooth backlift
helps the batter generate timing, control, and shot power.
</p>

<div className="backlift-demo">

<div className={`bat ${showLift ? "lift" : ""}`}></div>

</div>

<button
className="demo-btn"
onClick={()=>setShowLift(!showLift)}
>

{showLift ? "Reset Motion" : "Show Backlift"}

</button>

</section>


{/* STEPS */}

<section className="lesson-section">

<h2>Steps for Proper Grip & Backlift</h2>

<div className="step-grid">

<div className="step-card">

<h3>Step 1</h3>

<p>
Place the top hand firmly near the top of the handle.
This hand provides control and balance.
</p>

</div>


<div className="step-card">

<h3>Step 2</h3>

<p>
Position the bottom hand slightly below the top hand
with a relaxed grip.
</p>

</div>


<div className="step-card">

<h3>Step 3</h3>

<p>
Lift the bat smoothly backward while keeping the head steady.
</p>

</div>


<div className="step-card">

<h3>Step 4</h3>

<p>
Begin the downswing toward the ball while maintaining
balance and timing.
</p>

</div>

</div>

</section>

</div>

);

}