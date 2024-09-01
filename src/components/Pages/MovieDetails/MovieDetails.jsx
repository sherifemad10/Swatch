import { IoMdStar } from "react-icons/io";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d5d94ed72919557e5e6645d4a9b403df`
        );
        if (!movieResponse.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d5d94ed72919557e5e6645d4a9b403df`
        );
        if (!videoResponse.ok) {
          throw new Error("Failed to fetch movie video");
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

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="MovieDetails-page">
      {movie ? (
        <div className="MovieDetails-page-content">
          <div className="MovieDetails-page-details">
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="MovieDetails-page-details-text">
              <h5>{movie.title}</h5>
              <p>
                <span>Release Date:</span> {movie.release_date}
              </p>
              <p>
                <span>Rating:</span>
                <IoMdStar className="star" /> {movie.vote_average.toFixed(1)}
              </p>
              <p>
                <span>Popularity:</span> {movie.popularity}
              </p>
              <p>
                <span>Genres:</span>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <span>Runtime:</span> {movie.runtime} minutes
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
        <div>Movie not found</div>
      )}
    </div>
  );
};

export default MovieDetails;
