import { useContext, useEffect } from "react";
import "./WatchList.css";
import ApiContext from "../../Context/Context";
import { IoMdStar } from "react-icons/io";

const WatchList = () => {
  const { WatchList, setWatchList, removeFromWatchlist } =
    useContext(ApiContext);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      setWatchList(JSON.parse(storedWatchlist));
    }
  }, [setWatchList]);

  return (
    <div className="watchlist">
      {WatchList.length === 0 ? (
        <h5>No Movies in Watchlist</h5>
      ) : (
        WatchList.map((item) => (
          <div className="watchlist-content" key={item.id}>
            <div className="watchlist-img">
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                alt={item.title}
              />
            </div>
            <div className="watchlist-details">
              <h6>{item.title}</h6>
              <p>
                <span>Release Date:</span> {item.release_date}
              </p>
              <p>
                <span>Rating:</span> <IoMdStar className="star" />{" "}
                {item.vote_average?.toFixed(1)}
              </p>
              <p>
                <span>Popularity:</span> {item.popularity}
              </p>
              <p>
                <span>Genres:</span>{" "}
                {item.genres?.map((genre) => genre.name).join(", ") || "N/A"}
              </p>
              <p>
                <span>Runtime:</span>{" "}
                {item.runtime ? `${item.runtime} minutes` : "N/A"}
              </p>
              <div className="watchlist-btn">
                <button
                  onClick={() => removeFromWatchlist(item.id)}
                  className="remove"
                >
                  Remove From Watchlist
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WatchList;
