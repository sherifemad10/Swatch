import "./MoviesCard.css";
import { useContext, useState } from "react";
import ApiContext from "../../../../../Context/Context";
import { useNavigate } from "react-router-dom";

const MoviesCard = () => {
  const { topRatedMovie, addtowatchlist, removeFromWatchlist } =
    useContext(ApiContext);
  const navigate = useNavigate();

  // console.log(topRatedMovie)
  const [toggleStates, setToggleStates] = useState(
    topRatedMovie.map(() => false)
  );

  return (
    <div className="MoviesCard">
      {topRatedMovie.slice(5, 16).map((movie, index) => (
        <div
          onClick={() => addtowatchlist(movie.id)}
          className="MoviesCard-content"
          key={index}
        >
          <div className="movie-card-numbaer">
            <p>{index + 1}</p>
          </div>

          <div className="card-img-add">
            <div className="movie-card-img">
              <img
                onClick={() => {
                  navigate(`/movie/${movie.id}`);
                }}
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt="img"
              />
            </div>

            {toggleStates[index] ? (
              <button
                onClick={() => {
                  removeFromWatchlist(movie.id);
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
                  addtowatchlist(movie.id);
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

export default MoviesCard;
