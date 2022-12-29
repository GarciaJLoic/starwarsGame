import Posture from "./Posture.js";
import "./Postures.css";
import attack from "../assets/cursor-hot.png";
import love from "../assets/cursor-link.png";
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
        setLoveCounter={props.setLoveCounter}
      />
      <Posture
        classe="defensif"
        perso={props.perso}
        text="def"
        img={defensif}
        resetCardPick={props.resetCardPick}
        postureEventClickToggle={props.postureEventClickToggle}
        setLoveCounter={props.setLoveCounter}
      />
      <Posture
        classe="love"
        perso={props.perso}
        text="love"
        img={love}
        resetCardPick={props.resetCardPick}
        postureEventClickToggle={props.postureEventClickToggle}
        setLoveCounter={props.setLoveCounter}
      />
    </div>
  );
}

export default Postures;
