import "Styles/football.css";

export default function FootballField() {
  return (
    <div className="field-wrapper">
      <div className="football-ground">

        <div className="center-line"></div>
        <div className="center-circle"></div>

        <div className="penalty-box penalty-left"></div>
        <div className="penalty-box penalty-right"></div>

        {/* Players */}
        <div className="position gk" data-name="Goalkeeper"></div>

        <div className="position lb" data-name="Left Back"></div>
        <div className="position cb1" data-name="Center Back"></div>
        <div className="position cb2" data-name="Center Back"></div>
        <div className="position rb" data-name="Right Back"></div>

        <div className="position cm1" data-name="Central Midfielder"></div>
        <div className="position cm2" data-name="Central Midfielder"></div>
        <div className="position cam" data-name="Attacking Midfielder"></div>

        <div className="position lw" data-name="Left Winger"></div>
        <div className="position st" data-name="Striker"></div>
        <div className="position rw" data-name="Right Winger"></div>

      </div>
    </div>
  );
}