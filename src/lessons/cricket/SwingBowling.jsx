import "./styles/swing.css";

export default function SwingBowling(){

return(

<div className="lesson-page">

{/* HERO */}

<section className="lesson-hero">

<h1>Swing Bowling</h1>

<p>
Swing bowling is one of the most fascinating skills in cricket.
A swing bowler uses air movement around the ball to make it curve
through the air before reaching the batter. Even a small amount
of swing can completely deceive a batter and lead to wickets.
</p>

</section>


{/* WHAT IS SWING */}

<section className="lesson-section">

<h2>What is Swing?</h2>

<p>
Swing occurs when the cricket ball moves sideways in the air
after being released by the bowler. This movement happens due
to differences in air pressure around the two sides of the ball.
</p>

<div className="swing-diagram">

<div className="batter">Batter</div>

<div className="ball-path in"></div>
<div className="ball-path out"></div>

</div>

</section>



{/* TYPES */}

<section className="lesson-section">

<h2>Types of Swing</h2>

<div className="info-grid">

<div className="info-card">

<h3>Inswing</h3>

<p>
The ball curves toward the batter's body or stumps.
This delivery is dangerous because it can trap the batter
leg before wicket or hit the stumps.
</p>

</div>


<div className="info-card">

<h3>Outswing</h3>

<p>
The ball moves away from the batter after pitching.
Outswing often forces the batter to edge the ball
toward the slip fielders.
</p>

</div>

</div>

</section>



{/* HOW IT WORKS */}

<section className="lesson-section">

<h2>The Science Behind Swing</h2>

<p>
Swing bowling is influenced by aerodynamics. When one side
of the ball is smooth and the other side is rough, the air
flows differently around the ball. This difference creates
a pressure imbalance which causes the ball to curve.
</p>

<div className="science-grid">

<div className="science-card">

<h3>Shiny Side</h3>

<p>
The shiny side allows air to flow smoothly across the
surface of the ball.
</p>

</div>


<div className="science-card">

<h3>Rough Side</h3>

<p>
The rough side disturbs airflow and slows the air,
creating turbulence.
</p>

</div>


<div className="science-card">

<h3>Pressure Difference</h3>

<p>
The ball moves toward the side with lower air pressure,
causing swing.
</p>

</div>

</div>

</section>



{/* CONDITIONS */}

<section className="lesson-section">

<h2>Conditions That Help Swing</h2>

<ul className="strategy-list">

<li>Cloudy or humid weather</li>

<li>New cricket ball with shiny surface</li>

<li>Proper seam position during release</li>

<li>High bowling speed</li>

</ul>

</section>



{/* FUN FACT */}

<section className="lesson-summary">

<h2>Interesting Fact</h2>

<p>
Legendary swing bowlers like Wasim Akram, James Anderson,
and Dale Steyn mastered the art of controlling swing.
Some deliveries curve only a few centimeters in the air,
yet that small movement is enough to defeat world-class batters.
</p>

</section>

</div>

);

}