import "./styles/spin.css";

export default function SpinBowling(){

return(

<div className="lesson-page">

{/* HERO */}

<section className="lesson-hero">

<h1>Spin Bowling</h1>

<p>
Spin bowling is the art of deceiving the batter using rotation on the cricket ball.
Unlike fast bowlers who rely on speed, spin bowlers use flight, drift, and turn
to outsmart the batter.
</p>

</section>


{/* SPIN VISUAL */}

<section className="lesson-section">

<h2>How Spin Works</h2>

<p>
When a bowler rotates the ball with their fingers or wrist, the spinning
motion causes the ball to deviate after pitching on the ground.
</p>

<div className="spin-demo">

<div className="spin-ball"></div>

</div>

</section>


{/* TYPES */}

<section className="lesson-section">

<h2>Types of Spin Bowling</h2>

<div className="info-grid">

<div className="info-card">

<h3>Off Spin</h3>

<p>
Delivered by a right-arm off spinner, the ball spins from
off side to leg side for a right-handed batter.
</p>

</div>


<div className="info-card">

<h3>Leg Spin</h3>

<p>
Delivered by a right-arm leg spinner, the ball spins
from leg side toward the off side.
</p>

</div>


<div className="info-card">

<h3>Left Arm Orthodox</h3>

<p>
A left-arm spinner who spins the ball from off side
toward leg side for right-handed batters.
</p>

</div>


<div className="info-card">

<h3>Chinaman</h3>

<p>
A rare left-arm wrist spinner who spins the ball
in the opposite direction of orthodox spin.
</p>

</div>

</div>

</section>



{/* KEY SKILLS */}

<section className="lesson-section">

<h2>Skills Required for Spin Bowling</h2>

<ul className="strategy-list">

<li>Finger or wrist control to impart strong spin</li>

<li>Consistent line and length</li>

<li>Ability to vary flight and pace</li>

<li>Strategic field placement</li>

</ul>

</section>



{/* SPIN TRICKS */}

<section className="lesson-section">

<h2>Famous Spin Variations</h2>

<div className="science-grid">

<div className="science-card">

<h3>Doosra</h3>

<p>
An off spinner's delivery that spins the opposite way
to deceive the batter.
</p>

</div>


<div className="science-card">

<h3>Googly</h3>

<p>
A leg spinner's deceptive delivery that spins in
the opposite direction of a normal leg break.
</p>

</div>


<div className="science-card">

<h3>Top Spinner</h3>

<p>
A delivery that dips sharply and bounces higher
than expected.
</p>

</div>

</div>

</section>



{/* FUN FACT */}

<section className="lesson-summary">

<h2>Interesting Fact</h2>

<p>
Legendary spin bowlers like Shane Warne, Muttiah Muralitharan,
and Anil Kumble used subtle variations in spin, flight, and pace
to dominate world cricket.
</p>

</section>

</div>

);

}