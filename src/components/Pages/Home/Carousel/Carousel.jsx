import { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ApiContext from "../../../Context/Context";
import "./Carousel.css";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const { allMovie } = useContext(ApiContext);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel container"
    >
      {allMovie.slice(0, 5).map((movie, index) => (
        <Carousel.Item key={index}>
          <img
            className="slide-img"
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
            alt="First slide"
          />
          <div className="contant-sileder">
            <div className="contant-sileder-img">
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt="img"
              />
            </div>

            <div className="card-details">
              <h5>{movie.original_title}</h5>
              <p>{movie.overview}</p>
              <button>More details</button>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
