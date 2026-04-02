import { useEffect } from "react";
import "./styles/cricketLessons.css";

export default function BattingStance(){

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

<h1>Batting Stance</h1>

<p>
The batting stance is the starting position a batter takes before facing a delivery.
A correct stance provides balance, stability, and readiness to react quickly to
any type of delivery from the bowler.
</p>

</section>


{/* RULES */}

<section className="lesson-section fade-in">

<h2>Rules Related to Batting Stance</h2>

<p>
While cricket allows flexibility in batting techniques, certain rules defined
by the Laws of Cricket govern how a batter must position themselves when facing
a delivery.
</p>

<div className="rule-grid">

<div className="rule-card">
<h3>Stay within the Crease</h3>
<p>
The batter should normally take guard within the popping crease.
Leaving the crease early can risk being stumped or run out.
</p>
</div>

<div className="rule-card">
<h3>Face the Bowler</h3>
<p>
The batter must stand facing the bowler and be ready to receive the ball.
The stance should allow a clear view of the delivery.
</p>
</div>

<div className="rule-card">
<h3>No Obstruction</h3>
<p>
The batter must not intentionally obstruct the field when the ball is in play.
Proper stance ensures natural movement while avoiding obstruction.
</p>
</div>

<div className="rule-card">
<h3>Bat Within Control</h3>
<p>
The bat should remain within reasonable control during the stance and backlift
to ensure safe and legal play.
</p>
</div>

</div>

</section>



{/* ELEMENTS OF STANCE */}

<section className="lesson-section fade-in">

<h2>Key Elements of a Proper Batting Stance</h2>

<div className="info-grid">

<div className="info-card">

<h3>Head Position</h3>

<p>
The head should remain still and aligned with the ball. Keeping the head
steady improves focus and balance.
</p>

</div>


<div className="info-card">

<h3>Foot Placement</h3>

<p>
Feet should be shoulder-width apart to provide stability and allow quick
movement for front-foot or back-foot shots.
</p>

</div>


<div className="info-card">

<h3>Knee Flex</h3>

<p>
Slightly bent knees help maintain balance and allow rapid adjustments
to different ball lengths.
</p>

</div>


<div className="info-card">

<h3>Bat Position</h3>

<p>
The bat should rest lightly behind the back foot or near the ground
before starting the backlift.
</p>

</div>

</div>

</section>



{/* STEP GUIDE */}

<section className="lesson-section fade-in">

<h2>Step-by-Step Batting Stance Setup</h2>

<div className="step-grid">

<div className="step-card">
<h3>Step 1</h3>
<p>Stand sideways to the bowler with your front shoulder pointing toward the bowler.</p>
</div>

<div className="step-card">
<h3>Step 2</h3>
<p>Keep your feet slightly wider than shoulder width for stability.</p>
</div>

<div className="step-card">
<h3>Step 3</h3>
<p>Bend your knees slightly and keep your body relaxed.</p>
</div>

<div className="step-card">
<h3>Step 4</h3>
<p>Hold the bat comfortably with a light grip and prepare for the backlift.</p>
</div>

</div>

</section>



{/* COMMON MISTAKES */}

<section className="lesson-section fade-in">

<h2>Common Mistakes in Batting Stance</h2>

<ul className="strategy-list">

<li>Standing too upright which reduces balance</li>

<li>Feet placed too close together making movement difficult</li>

<li>Head leaning away from the ball</li>

<li>Holding the bat too tightly which reduces flexibility</li>

</ul>

</section>



{/* SUMMARY */}

<section className="lesson-summary fade-in">

<h2>Coaching Tip</h2>

<p>
A balanced stance allows a batter to react quickly to different deliveries.
Professional players spend years refining their stance because even small
adjustments can significantly improve shot timing and control.
</p>

</section>

</div>

);

}