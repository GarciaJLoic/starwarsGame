import "./Posture.css";

function Posture(props) {
  const choisePostureOpponent = () => {
    // Génére aléatoirement un nombre entre 1 et 3
    const randomChoise = Math.floor(Math.random() * (3 - 0));
    const postureArr = ["attack", "defensif", "love"];
    // Défini la posture de l'adversaire
    return postureArr[randomChoise];
  };
  const testerLovePosture = (e, perso) => {
    // Vérifie si la posture est love
    if (e.includes("love")) {
      // Récupère la barre de progression
      let progressBar = document.querySelector(`.progressBar${perso}`)
        .attributes[0];
      // Si elle est inférieur à 4 on ajoute 1
      if (parseInt(progressBar.value) < 4) {
        progressBar.value = parseInt(progressBar.value) + 1;
        //  Si elle est égale à 4 on change le texte
        if (parseInt(progressBar.value) === 4) {
          document.getElementsByClassName(
            `posture${perso}`
          )[2].firstChild.innerHTML = "POWER OF LOVE";
        }
      } else {
        // Si la valeur est supérieur à 4 alors on remet à zéro
        document
          .querySelector(`.card${perso}RectoActive`)
          .classList.add(`card${perso}RectoLove`);
        document
          .querySelector(`.card${perso}VersoActive`)
          .classList.add(`card${perso}VersoLove`);
        progressBar.value = 0;
        document.getElementsByClassName(
          `posture${perso}`
        )[2].firstChild.innerHTML = "love";

        console.log(props.deck);
        if (perso === "Player") {
          document.querySelector(`.imgCard${perso}`).src =
            props.deck[props.cardNumber].love;
        } else {
          document.querySelector(`.imgCard${perso}`).src =
            props.deckOpponent[props.opponentCardNumber].love;
        }
      }
    }
  };
  const choixPosture = (e) => {
    // Rend visible l'image de la posture du joueur lors du clic
    e.target.lastElementChild.classList.toggle("postureInvi");
    // Ajoute une classe à la carte avec l'effet de couleur
    document.querySelector(".cardPlayerRecto").classList.toggle(props.classe);
    // Gére la jauge de lovePower du joueur

    const testLove = [...e.target.classList];
    testerLovePosture(testLove, props.perso);
    // Génère la posture de l'opposant
    const postureOpponent = choisePostureOpponent();
    //Rend visible l'image de la posture de l'opposant
    document
      .querySelector(`.postureOpponent.${postureOpponent}`)
      .lastElementChild.classList.toggle("postureInvi");
    // Gére la jauge de lovePower du joueur de l'opposant
    testerLovePosture(postureOpponent, "Opponent");
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
