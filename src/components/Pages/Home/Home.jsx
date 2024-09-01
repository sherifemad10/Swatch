import ControlledCarousel from "./Carousel/Carousel";
import Features from "./Features/Features";
import Filmes from "./Filmes/Filmes";
import Main from "./Main/Main";
import Tv from "./TV/Tv";
import UpcomingMovie from "./upcomingMovie/upcoming";

const Home = () => {
  return (
    <div className="Home">
      <Main />
      <Features />
      <Filmes />
      <Tv />
      <ControlledCarousel />
      <UpcomingMovie />
    </div>
  );
};

export default Home;
