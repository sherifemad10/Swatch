import MoviesCard from "./MoviesCard/MoviesCard";
import "./Top10.css";

const Top10 = () => {
  return (
    <div className="Top10">
      <div className="top10-tittle">
        <h4>Top 10 movies this week</h4>
        <p>
          Discover the most popular movies of the week and find out where to
          watch them.
        </p>
      </div>

      <div className="top10-content">
        <MoviesCard />
      </div>
    </div>
  );
};

export default Top10;
