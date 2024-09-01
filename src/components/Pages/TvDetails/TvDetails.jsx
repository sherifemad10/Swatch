import { IoMdStar } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TvDetails = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTvDetails = async () => {
      setLoading(true);
      try {
        const tvResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=d5d94ed72919557e5e6645d4a9b403df`
        );
        if (!tvResponse.ok) {
          throw new Error("Failed to fetch TV show details");
        }
        const tvData = await tvResponse.json();
        setTvShow(tvData);

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=d5d94ed72919557e5e6645d4a9b403df`
        );
        if (!videoResponse.ok) {
          throw new Error("Failed to fetch TV show video");
        }
        const videoData = await videoResponse.json();
        const officialTrailer = videoData.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        setVideo(officialTrailer ? officialTrailer.key : null);
      } catch (error) {
        console.error("Fetch error: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTvDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="MovieDetails-page">
      {tvShow ? (
        <div className="MovieDetails-page-content">
          <div className="MovieDetails-page-details">
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${tvShow.poster_path}`}
              alt={tvShow.name}
            />
            <div className="MovieDetails-page-details-text">
              <h5>{tvShow.name}</h5>
              <p>
                <span>First Air Date:</span> {tvShow.first_air_date}
              </p>
              <p>
                <span>Rating:</span>
                <IoMdStar className="star" /> {tvShow.vote_average.toFixed(1)}
              </p>
              <p>
                <span>Popularity:</span> {tvShow.popularity}
              </p>
              <p>
                <span>Genres:</span>{" "}
                {tvShow.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <span>Number of Seasons:</span> {tvShow.number_of_seasons}
              </p>
              <p>
                <span>Number of Episodes:</span> {tvShow.number_of_episodes}
              </p>
            </div>
          </div>

          <div className="MovieDetails-page-details-video">
            {video ? (
              <div>
                <h2>Watch the Trailer</h2>
                <iframe
                  width="700"
                  height="400"
                  src={`https://www.youtube.com/embed/${video}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div>No trailer available</div>
            )}
          </div>
        </div>
      ) : (
        <div>TV Show not found</div>
      )}
    </div>
  );
};

export default TvDetails;
