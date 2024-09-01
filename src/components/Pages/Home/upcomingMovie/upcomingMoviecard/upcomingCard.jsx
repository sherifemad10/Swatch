import ApiContext from "../../../../Context/Context";
import { useContext } from "react";
import "./upcomingcard.css";

const UpcomingCard = () => {
  const { upcomingMovie } = useContext(ApiContext);
  console.log(upcomingMovie);

  return (
    <div className="MoviesCard">
      {upcomingMovie.slice(0, 10).map((upcoming, index) => (
        <div className="MoviesCard-content" key={index}>
          <div className="upcoming-card-number">
            <p>{index + 1}</p>
          </div>
          <div className="movie-card-img">
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${upcoming.poster_path}`}
              alt="Movie Poster"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingCard;
