/* eslint-disable */
import "./CardPack.css";
import axios from "axios";
import { useState, useEffect } from "react";
function CardPack({
  perso,
  cardStateVerso,
  cardStateRecto,
  changeStateCard,
  deck,
  cardNumber,
}) {
  const [deckPlayer, setDeckPlayer] = useState(" ");
  const [isLoading, setLoading] = useState(true);
  const getCardPlayer = (deckName) => {
    axios
      .get(
        "https://raw.githubusercontent.com/GarciaJLoic/starwarsGame/002-Deck/all.json"
      )
      .then((res) => res.data)
      .then((data) => {
        setDeckPlayer(data.filter((e) => e.deck === deckName));
        isLoading ? setLoading(false) : null;
      });
  };

  useEffect(() => {
    setTimeout(() => {
      {
        getCardPlayer(deck);
      }
    });
  }, []);
  return (
    <div className={`blocKCard${perso}`}>
      <div className={`cardPack${perso}`}></div>

      <div className={`card ${cardStateRecto}`}>
        {!isLoading ? (
          <div className="textCard">
            <img
              className="imgCard"
              src={deckPlayer[cardNumber].image}
              alt={deckPlayer[cardNumber].name}
            />
            <h3>{deckPlayer[cardNumber].name}</h3>
            <p> Attaque : {deckPlayer[cardNumber].attack}</p>
            <p>Vie : {deckPlayer[cardNumber].life}</p>
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
