import { useContext, useState } from "react";
import ApiContext from "../../Context/Context";
import "./TvSeries.css";
import { useNavigate } from "react-router-dom";

const TvSeries = () => {
  const { allTv, addtowatchlist, removeFromWatchlist } = useContext(ApiContext);
  const [toggleStates, setToggleStates] = useState(allTv.map(() => false));
  const navigate = useNavigate();

  return (
    <div className="TvSeries">
      {allTv.map((Tv, index) => (
        <div className="Tvv-card" key={index}>
          <img
            onClick={() => {
              navigate(`/tv/${Tv.id}`);
            }}
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${Tv.poster_path}`}
            alt={Tv.title}
          />

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
      ))}
    </div>
  );
};

export default TvSeries;
