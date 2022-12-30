import { useState } from "react";
import "./Home.css";
import Avatar from "../components/Avatar";
import CardPack from "../components/CardPack";
import Postures from "../components/Postures";
import LoveCounter from "../components/LoveCounter";
function Home() {
  const [cardStateVersoPlayer, setCardStateVersoPlayer] =
    useState(`cardPlayerVerso`);
  const [cardStateRectoPlayer, setCardStateRectoPlayer] =
    useState(`cardPlayerRecto`);
  const [loveCounterPlayer, setLoveCounterPlayer] = useState(4);
  const [cardStateVersoOpponent, setCardStateVersoOpponent] =
    useState(`cardOpponentVerso`);
  const [cardStateRectoOpponent, setCardStateRectoOpponent] =
    useState(`cardOpponentRecto`);
  const [loveCounterOpponent, setLoveCounterOpponent] = useState(4);
  // Bloque le clic sur les postures
  const postureEventClickToggle = (action) => {
    const postureDisabled = document.getElementsByClassName("posture");
    // sélectionne le bloc posture du joueur
    for (let i = 0; i < postureDisabled.length; i++) {
      action === "toggle"
        ? postureDisabled[i].classList.toggle("disabledEventClick")
        : postureDisabled[i].classList.add("disabledEventClick");
      // Permet de ne pas supprimer la classe lorsqu'on ne le souhaite pas
    }
  };
  // Anime la carte lors de la pioche
  const changeStateCard = (state, action, perso) => {
    if (perso === "Player") {
      // Bloque les clics des postures
      postureEventClickToggle(action);
      // Modifie l'états des cartes recto/veso du joueur / opponent
      // Les états peuvent être "", "Active", "Discard"
      setCardStateVersoPlayer(`cardPlayerVerso cardPlayerVerso${state}`);
      setCardStateRectoPlayer(`cardPlayerRecto cardPlayerRecto${state}`);
      setCardStateVersoOpponent(`cardOpponentVerso cardOpponentVerso${state}`);
      setCardStateRectoOpponent(`cardOpponentRecto cardOpponentRecto${state}`);
    } else {
      console.log(perso);
    }
  };
  // Réinistialise la carte du joueur
  const resetCardPickPlayer = (e, postureOpponent) => {
    // Bloque les clics des postures
    postureEventClickToggle();
    // Délais d'1s avant de se lancer
    setTimeout(() => {
      // Réinistialise l'icone du sabre du joueur
      e.target.lastElementChild.classList.toggle("postureInvi");
      // Réinistialise l'icone du sabre de l'opponent
      document
        .querySelector(`.postureOpponent.${postureOpponent}`)
        .lastElementChild.classList.toggle("postureInvi");
      // Fait disparaître les cartes
      changeStateCard("Discard", "add", "Player");
    }, 2000);
    // délais de 2sec
    setTimeout(() => {
      // Remet les states en position d'origine
      changeStateCard("", "add", "Player");
    }, 3000);
  };
  return (
    <div className="home">
      <div className="blockGame">
        <div id="opponent">
          <Postures perso="Opponent" setLoveCounter={setLoveCounterOpponent} />
          <Avatar perso="opponent" />
        </div>

        <LoveCounter perso="Opponent" loveCounter={loveCounterOpponent} />
        <div className="cardPack">
          <CardPack
            perso="Opponent"
            changeStateCard={changeStateCard}
            cardStateVerso={cardStateVersoOpponent}
            cardStateRecto={cardStateRectoOpponent}
          />
          <CardPack
            perso="Player"
            changeStateCard={changeStateCard}
            cardStateVerso={cardStateVersoPlayer}
            cardStateRecto={cardStateRectoPlayer}
          />
        </div>

        <LoveCounter perso="Player" loveCounter={loveCounterPlayer} />
        <div id="player">
          <Avatar perso="player" />
          <Postures
            perso="Player"
            resetCardPick={resetCardPickPlayer}
            postureEventClickToggle={postureEventClickToggle}
            setLoveCounter={setLoveCounterPlayer}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
