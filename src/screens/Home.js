import { useState } from "react";
import "./Home.css";
import Avatar from "../components/Avatar";
import CardPack from "../components/CardPack";
import Postures from "../components/Postures";
function Home() {
  const [cardStateVersoPlayer, setCardStateVersoPlayer] =
    useState(`cardPlayerVerso`);
  const [cardStateRectoPlayer, setCardStateRectoPlayer] =
    useState(`cardPlayerRecto`);

  // Block le clic sur les postures
  const postureEventClickToggle = (action) => {
    const postureDisabled = document.getElementsByClassName("posture");
    for (let i = 0; i < postureDisabled.length; i++) {
      action === "toggle"
        ? postureDisabled[i].classList.toggle("disabledEventClick")
        : postureDisabled[i].classList.add("disabledEventClick");
    }
  };
  // Anime la carte lors de la pioche
  const changeStateCard = (state, perso, action) => {
    postureEventClickToggle(action);
    setCardStateVersoPlayer(`card${perso}Verso card${perso}Verso${state}`);
    setCardStateRectoPlayer(`card${perso}Recto card${perso}Recto${state}`);
  };
  // Réinistialise la carte du joueur
  const resetCardPickPlayer = (e) => {
    postureEventClickToggle();
    setTimeout(() => {
      setCardStateVersoPlayer(`cardPlayerVerso`);
      setCardStateRectoPlayer(`cardPlayerRecto`);
      e.target.lastElementChild.classList.toggle("postureInvi");
      changeStateCard("Discard", "Player", "add");
    }, 1000);

    setTimeout(() => {
      changeStateCard("", "Player", "add");
    }, 2000);
  };
  return (
    <div className="home">
      <div className="blockGame">
        <Avatar perso="player" />
        <Postures
          perso="player"
          resetCardPick={resetCardPickPlayer}
          postureEventClickToggle={postureEventClickToggle}
        />
        <div className="cardPack">
          <CardPack
            perso="Player"
            changeStateCard={changeStateCard}
            cardStateVersoPlayer={cardStateVersoPlayer}
            cardStateRectoPlayer={cardStateRectoPlayer}
          />
          <CardPack perso="Opponent" />
        </div>
        <Avatar perso="opponent" />
      </div>
    </div>
  );
}

export default Home;
