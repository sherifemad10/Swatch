// import './upcomingMovie.css'
import UpcomingCard from "./upcomingMoviecard/upcomingCard";

const UpcomingMovie = () => {
  return (
    <div className="Top10" style={{ marginTop: "10rem" }}>
      <div className="top10-tittle">
        <h4>Top 10 Upcoming Movie this week</h4>
        <p>
          Discover the most popular Tv Series of the week and find out where to
          watch them.
        </p>
      </div>

      <div className="top10-content">
        <UpcomingCard />
      </div>
    </div>
  );
};

export default UpcomingMovie;
