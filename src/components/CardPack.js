import "./CardPack.css";

function CardPack({
  perso,
  cardStateVersoPlayer,
  cardStateRectoPlayer,
  changeStateCard,
}) {
  return (
    <div className={`blocKCard${perso}`}>
      <div className={`cardPack${perso}`}></div>

      <div className={`card ${cardStateRectoPlayer}`}></div>
      <div
        className={`card ${cardStateVersoPlayer}`}
        onClick={() => changeStateCard("Active", "Player", "toggle")}
      ></div>
    </div>
  );
}

export default CardPack;
