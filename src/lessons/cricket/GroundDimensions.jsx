import { useEffect } from "react";
import "./styles/cricketLessons.css";

export default function GroundDimensions() {

  useEffect(()=>{
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach(el=>observer.observe(el));
  },[]);

  return (

<div className="lesson-page">

{/* HERO */}

<section className="lesson-hero fade-in">

<h1>Cricket Ground Dimensions</h1>

<p>
Understanding the dimensions of a cricket ground is essential for players,
coaches, analysts, and strategists. Unlike many sports fields that follow
strictly fixed sizes, cricket grounds vary across stadiums while still
respecting the regulations established by the Laws of Cricket.
</p>

</section>



{/* OVERVIEW */}

<section className="lesson-section fade-in">

<h2>Overview of a Cricket Ground</h2>

<p>
A cricket ground is typically circular or oval in shape with the pitch
positioned at the center of the playing area. The field is covered with
grass and surrounded by a boundary line that determines scoring limits.
The dimensions of the playing field affect gameplay, field placements,
batting strategies, and bowling tactics.
</p>

<div className="info-grid">

<div className="info-card">

<h3>Field Shape</h3>

<p>
Most international cricket grounds are designed in an oval or circular
shape. This allows flexibility in boundary distances and creates strategic
variations across venues.
</p>

</div>


<div className="info-card">

<h3>Pitch Location</h3>

<p>
The pitch is always located at the center of the field and forms the
primary playing surface where bowlers deliver the ball and batters
play their shots.
</p>

</div>


<div className="info-card">

<h3>Boundary</h3>

<p>
The boundary defines the outer limit of the playing field. When the
ball crosses this line, runs are awarded automatically depending
on how the ball reaches it.
</p>

</div>

</div>

</section>



{/* DIMENSIONS */}

<section className="lesson-section fade-in">

<h2>Official Ground Measurements</h2>

<div className="dimension-grid">

<div className="dimension-card">

<h3>Pitch Length</h3>

<p className="big-number">22 yards</p>

<p>
The cricket pitch is exactly 22 yards (20.12 meters) long.
This distance has remained unchanged since the early
development of the game.
</p>

</div>

<div className="dimension-card">

<h3>Pitch Width</h3>

<p className="big-number">10 feet</p>

<p>
The pitch is approximately 10 feet (3.05 meters) wide and
prepared carefully using compacted soil or clay.
</p>

</div>


<div className="dimension-card">

<h3>Inner Circle</h3>

<p className="big-number">30 yards</p>

<p>
The inner circle used in limited-overs cricket has a radius
of 30 yards (27.4 meters) from the pitch center.
</p>

</div>


<div className="dimension-card">

<h3>Boundary Range</h3>

<p className="big-number">65–90 m</p>

<p>
International cricket boundaries typically range between
65 and 90 meters from the center of the pitch.
</p>

</div>

</div>

</section>



{/* CREASES */}

<section className="lesson-section fade-in">

<h2>Creases on the Pitch</h2>

<p>
Several important lines are marked on the pitch to assist
umpires in making decisions related to bowling legality,
run-outs, and stumping situations.
</p>

<div className="crease-grid">

<div className="crease-card">
<h3>Bowling Crease</h3>
<p>
This line passes through the stumps and determines
whether a bowler delivers the ball legally.
</p>
</div>

<div className="crease-card">
<h3>Popping Crease</h3>
<p>
Located 4 feet in front of the bowling crease,
it helps determine run-outs and no-balls.
</p>
</div>

<div className="crease-card">
<h3>Return Crease</h3>
<p>
These lines run perpendicular to the bowling crease
and control the bowler's lateral movement.
</p>
</div>

</div>

</section>



{/* STRATEGY */}

<section className="lesson-section fade-in">

<h2>Why Ground Size Matters</h2>

<p>
Different stadiums around the world have different
boundary lengths and ground shapes. These variations
create unique playing conditions that influence
team strategy.
</p>

<ul className="strategy-list">

<li>
Small grounds encourage aggressive batting
and higher scoring matches.
</li>

<li>
Large grounds favor bowlers and reward
good field placements.
</li>

<li>
Uneven boundary distances create strategic
target zones for batters.
</li>

<li>
Captains often adjust field placements
depending on boundary dimensions.
</li>

</ul>

</section>



{/* SUMMARY */}

<section className="lesson-summary fade-in">

<h2>Key Takeaways</h2>

<p>
Cricket grounds are designed with flexibility, allowing
each stadium to have unique characteristics while still
following the Laws of Cricket. Understanding these
dimensions helps players adapt strategies, optimize
field placements, and exploit scoring opportunities.
</p>

</section>


</div>

  );
}