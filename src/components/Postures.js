import Posture from "./Posture.js";
import "./Postures.css";
import attack from "../assets/cursor-hot.png";
import equilibre from "../assets/cursor-link.png";
import defensif from "../assets/cursor.png";
function Postures(props) {
  return (
    <div className={`postures  ${props.perso}`}>
      <Posture
        classe="attack"
        perso={props.perso}
        text="attack"
        img={attack}
        resetCardPick={props.resetCardPick}
        postureEventClickToggle={props.postureEventClickToggle}
      />
      <Posture
        classe="defensif"
        perso={props.perso}
        text="def"
        img={defensif}
        resetCardPick={props.resetCardPick}
        postureEventClickToggle={props.postureEventClickToggle}
      />
      <Posture
        classe="equilibre"
        perso={props.perso}
        text="équilibré"
        img={equilibre}
        resetCardPick={props.resetCardPick}
        postureEventClickToggle={props.postureEventClickToggle}
      />
    </div>
  );
}

export default Postures;
