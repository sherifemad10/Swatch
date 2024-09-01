import "./Filmes.css";
import Top10 from "./Top10/Top10";

const Filmes = () => {
  return (
    <div className="Filmes ">
      <h3>Find out about upcoming, new and popular movies and TV series.</h3>

      <Top10 />
    </div>
  );
};

export default Filmes;
