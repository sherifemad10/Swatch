import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <main className="Main">
      <div className="main-contanier">
        <h1>
          Welcome to <span>Swatch!</span>
        </h1>
        <p>Your streaming guide for movies, TV shows</p>
        <p>
          Find where to stream new, popular & upcoming entertainment with
          JustWatch.
        </p>

        <div className="Main-btn">
          <button className="Discover">Discover Movies & TV shows</button>
          <Link to="#Features">
            <button className="Features-btn">Features</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
