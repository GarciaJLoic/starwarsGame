import "./Home.css";
import Avatar from "../components/Avatar";
import CardPack from "../components/CardPack";
import Postures from "../components/Postures";
function Home() {
  return (
    <div className="home">
      <div className="blockGame">
        <Avatar perso="player" />
        <Postures perso="player" />
        <div className="cardPack">
          <CardPack perso="Player" />
          <CardPack perso="Opponent" />
        </div>
        <Avatar perso="opponent" />
      </div>
    </div>
  );
}

export default Home;
