import { useState } from "react";
import "./styles/cricketLessons.css";

export default function FieldingPositions(){

const [popup,setPopup] = useState(null);

const info = {
 slip:{
   title:"Slip",
   body:"Position beside wicketkeeper to catch edges from fast bowlers."
 },
 gully:{
   title:"Gully",
   body:"Placed slightly wider than slip to catch thicker edges."
 },
 point:{
   title:"Point",
   body:"Covers square off-side shots."
 },
 cover:{
   title:"Cover",
   body:"Stops drives played through cover region."
 },
 "mid-off":{
   title:"Mid Off",
   body:"Defensive position on off-side for straight drives."
 },
 "mid-on":{
   title:"Mid On",
   body:"Mirrors mid-off on leg side."
 },
 "square-leg":{
   title:"Square Leg",
   body:"Stops shots played behind square on leg side."
 },
 "fine-leg":{
   title:"Fine Leg",
   body:"Protects leg glance and hook shots."
 },
 "third-man":{
   title:"Third Man",
   body:"Catches edges flying behind slips."
 },
 "long-off":{
   title:"Long Off",
   body:"Boundary rider stopping lofted off drives."
 },
 "long-on":{
   title:"Long On",
   body:"Boundary rider for lofted straight drives."
 }
};

return(

<div className="lesson-container">

<h3>Interact with positions and click to learn</h3>

<div className="ground">

<div className="inner-circle"/>
<div className="pitch"/>

{Object.keys(info).map(pos=>(
<div
 key={pos}
 className={`position ${pos}`}
 data-name={pos}
 onClick={()=>setPopup(pos)}
/>
))}

</div>


{popup && (

<div className="popup">

<div className="popup-content">

<span className="close" onClick={()=>setPopup(null)}>×</span>

<h2>{info[popup].title}</h2>

<p>{info[popup].body}</p>

</div>

</div>

)}

</div>

);

}