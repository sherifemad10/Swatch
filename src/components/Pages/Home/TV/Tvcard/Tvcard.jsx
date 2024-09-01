import { useContext, useState } from "react";
import ApiContext from "../../../../Context/Context";
import { useNavigate } from "react-router-dom";
import "./TvCard.css";

const Tvcard = () => {
  const { allTv, addtowatchlist, removeFromWatchlist } = useContext(ApiContext);
  const [toggleStates, setToggleStates] = useState(allTv.map(() => false));
  const navigate = useNavigate();

  return (
    <div className="MoviesCard">
      {allTv.slice(5, 16).map((Tv, index) => (
        <div
          onClick={() => addtowatchlist(Tv.id)}
          className="MoviesCard-content"
          key={Tv.id}
        >
          <div className="movie-card-numbaer">
            <p>{index + 1}</p>
          </div>

          <div className="card-img-add">
            <div className="movie-card-img">
              <img
                onClick={() => {
                  navigate(`/tv/${Tv.id}`);
                }}
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${Tv.poster_path}`}
                alt="img"
              />
            </div>

            {toggleStates[index] ? (
              <button
                onClick={() => {
                  removeFromWatchlist(Tv.id);
                  setToggleStates((prevStates) => {
                    const newStates = [...prevStates];
                    newStates[index] = false;
                    return newStates;
                  });
                }}
                className="removeto"
              >
                Remove from Watchlist
              </button>
            ) : (
              <button
                onClick={() => {
                  addtowatchlist(Tv.id);
                  setToggleStates((prevStates) => {
                    const newStates = [...prevStates];
                    newStates[index] = true;
                    return newStates;
                  });
                }}
                className="add"
              >
                Add to Watchlist
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tvcard;
