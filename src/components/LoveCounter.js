import "./LoveCounter.css";
import saber from "../assets/lightsaber-hilt.png";
function LoveCounter(props) {
  return (
    <div className={`loveCounter loveCounter${props.perso}`}>
      <img src={saber} alt="saber" />
      <div
        data={props.loveCounter}
        className={`progressBar progressBar${props.perso}`}
      ></div>
    </div>
  );
}

export default LoveCounter;
