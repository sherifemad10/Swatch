import { useContext, useState } from "react";
import "./Movies.css";
import ApiContext from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const { allMovie, addtowatchlist, removeFromWatchlist } =
    useContext(ApiContext);
  const [toggleStates, setToggleStates] = useState(allMovie.map(() => false));
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredMovies = allMovie.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Movies">
      <div className="search">
        <div className="group">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
            </g>
          </svg>
          <input
            placeholder="Search"
            type="search"
            className="input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* end search */}

      <div className="moviess-contant">
        {filteredMovies.map((movie, index) => (
          <div className="moviess-card" key={index}>
            <img
              onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt={movie.title}
            />
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
        ))}
      </div>
    </div>
  );
};

export default Movies;
