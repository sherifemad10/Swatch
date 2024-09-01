import Tvcard from "./Tvcard/Tvcard";

const Tv = () => {
  return (
    <div className="Top10">
      <div className="top10-tittle">
        <h4>Top 10 Tv Series this week</h4>
        <p>
          Discover the most popular Tv Series of the week and find out where to
          watch them.
        </p>
      </div>

      <div className="top10-content">
        <Tvcard />
      </div>
    </div>
  );
};

export default Tv;
