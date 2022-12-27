import { useState } from "react";
import "./CardPack.css";

function CardPack({ perso }) {
  const [cardStateVerso, setCardStateVerso] = useState(`card${perso}Verso`);
  const [cardStateRecto, setCardStateRecto] = useState(`card${perso}Recto`);

  const postureEventClickToggle = () => {
    const postureDisabled = document.getElementsByClassName("posture");
    for (let i = 0; i < postureDisabled.length; i++) {
      postureDisabled[i].classList.toggle("disabledEventClick");
    }
  };
  // Réinistialise la carte
  const resetCardPick = () => {
    setTimeout(() => {
      setCardStateVerso(`card${perso}Verso`);
      setCardStateRecto(`card${perso}Recto`);
    }, 1000);
  };

  // Anime la carte lors de la pioche
  const changeStateCard = (state) => {
    setCardStateVerso(`card${perso}Verso card${perso}Verso${state}`);
    setCardStateRecto(`card${perso}Recto card${perso}Recto${state}`);
    postureEventClickToggle(); // Retire le blocage du click sur les postures
    if (state === "Discard") {
      // Réinistialise la carte
      resetCardPick();
    }
  };

  return (
    <div className={`blocKCard${perso}`}>
      <div className={`cardPack${perso}`}></div>

      <div
        className={`card ${cardStateRecto}`}
        onClick={() => changeStateCard("Discard")}
      ></div>
      <div
        className={`card ${cardStateVerso}`}
        onClick={() => changeStateCard("Active")}
      ></div>
    </div>
  );
}

export default CardPack;
