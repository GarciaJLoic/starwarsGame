/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import "./CardPack.css";
import life from "../assets/life.png";
import attack from "../assets/attack.png";
function CardPack({
  perso,
  cardStateVerso,
  cardStateRecto,
  changeStateCard,
  deckName,
  cardNumber,
  deck,
  getCardDeck,
}) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCardDeck(deckName);
  }, []);
  isLoading ? setLoading(false) : null; // Attand que la page soit chargée avant de faire appaitre les cartes
  // console.log(deck);
  return (
    <div className={`blocKCard${perso}`}>
      {console.log(deckName, deck)}
      <div className={`cardPack${perso}`}></div>
      <div className={`card ${cardStateRecto}`}>
        {!isLoading ? (
          <div className="textCard">
            <img
              className={`imgCard${perso}`}
              src={deck[cardNumber].image}
              alt={deck[cardNumber].name}
            />
            <h3>{deck[cardNumber].name}</h3>
            <p>
              <img className="iconeCard" src={attack} alt={attack} />
              {deck[cardNumber].attack}
              <img className="iconeCard" src={life} alt={life} />
              {deck[cardNumber].life}
            </p>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
      <div
        className={`card ${cardStateVerso}`}
        onClick={() => changeStateCard("Active", "toggle", perso)}
      ></div>
    </div>
  );
}

export default CardPack;
