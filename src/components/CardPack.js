import "./CardPack.css";

function CardPack({ perso, cardStateVerso, cardStateRecto, changeStateCard }) {
  return (
    <div className={`blocKCard${perso}`}>
      <div className={`cardPack${perso}`}></div>

      <div className={`card ${cardStateRecto}`}></div>

      <div
        className={`card ${cardStateVerso}`}
        onClick={() => changeStateCard("Active", "toggle", perso)}
      ></div>
    </div>
  );
}

export default CardPack;
