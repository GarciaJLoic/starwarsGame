import "./Posture.css";

function Posture(props) {
  const choixPosture = (e) => {
    e.target.lastElementChild.classList.toggle("postureInvi");
    props.resetCardPick(e);
  };
  return (
    <div
      className={`posture  posture${props.perso} disabledEventClick `}
      onClick={(e) => choixPosture(e)}
    >
      <h1>{props.text}</h1>
      <img className="postureInvi" src={`${props.img}`} alt={`${props.text}`} />
    </div>
  );
}

export default Posture;
