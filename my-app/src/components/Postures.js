import Posture from "./Posture.js";
import "./Postures.css";
import attack from "../assets/cursor-hot.png";
import equilibre from "../assets/cursor-link.png";
import defensif from "../assets/cursor.png";
function Postures(props) {
  return (
    <div className={`postures  ${props.perso}`}>
      <Posture perso="player" text="attack" img={attack} />
      <Posture perso="player" text="def" img={defensif} />
      <Posture perso="player" text="équilibré" img={equilibre} />
    </div>
  );
}

export default Postures;
