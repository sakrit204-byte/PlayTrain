import "./styles/cricketLessons.css";
import frontFootDefense from "../../assets/cricket_images/frontFootDefense.jpg";
export default function FrontFootDefense(){

return(

<div className="lesson-page">

<section className="lesson-hero">

<h1>Front Foot Defence</h1>

<p>
The front foot defence is one of the most fundamental batting techniques
used to safely block good length deliveries while maintaining balance
and protecting the stumps.
</p>

</section>


<section className="lesson-section">

<h2>Front Foot Defence Technique</h2>

<p>
Observe the correct body position, front foot movement, and bat angle
used to defend the ball effectively.
</p>

<div className="defence-image-container">

<img
  src={frontFootDefense}
  alt="Front Foot Defense Technique"
  className="defence-image"
/>

</div>

</section>


<section className="lesson-section">

<h2>Key Steps</h2>

<div className="step-grid">

<div className="step-card">
<h3>Step 1</h3>
<p>Move the front foot toward the pitch of the ball.</p>
</div>

<div className="step-card">
<h3>Step 2</h3>
<p>Keep the head over the front knee for balance.</p>
</div>

<div className="step-card">
<h3>Step 3</h3>
<p>Bring the bat down straight with a vertical face.</p>
</div>

<div className="step-card">
<h3>Step 4</h3>
<p>Meet the ball softly under the eyes.</p>
</div>

</div>

</section>

</div>

);

}