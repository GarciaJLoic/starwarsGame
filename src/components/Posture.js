import "./Posture.css";

function Posture(props) {
  const choisePostureOpponent = () => {
    // Génére aléatoirement un nombre entre 1 et 3
    const randomChoise = Math.floor(Math.random() * (3 - 0));
    const postureArr = ["attack", "defensif", "equilibre"];
    // Défini la posture de l'adversaire
    return postureArr[randomChoise];
  };
  const choixPosture = (e) => {
    // Rend visible l'image de la posture du joueur lors du clic
    e.target.lastElementChild.classList.toggle("postureInvi");
    // Ajoute une classe à la carte avec l'effet de couleur
    document.querySelector(".cardPlayerRecto").classList.toggle(props.classe);
    // Génère la posture de l'opposant
    const postureOpponent = choisePostureOpponent();
    //Rend visible l'image de la posture de l'opposant
    document
      .querySelector(`.postureopponent.${postureOpponent}`)
      .lastElementChild.classList.toggle("postureInvi");

    // Ajoute une classe à la carte avec l'effet de couleur
    document
      .querySelector(".cardOpponentRecto")
      .classList.toggle(postureOpponent);
    // Fait disparaître les cartes et prépare la nouvelle pioche
    props.resetCardPick(e, postureOpponent);
  };
  return (
    <div
      className={`posture  posture${props.perso} ${props.classe} disabledEventClick `}
      onClick={(e) => choixPosture(e)}
    >
      <h1>{props.text}</h1>
      <img className="postureInvi" src={`${props.img}`} alt={`${props.text}`} />
    </div>
  );
}

export default Posture;
