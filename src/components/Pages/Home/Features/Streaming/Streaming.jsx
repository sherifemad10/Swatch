import "./Streaming.css";
import Nitfilex from "../../../../../../public/assets/nit.webp";
import prime from "../../../../../../public/assets/prime.webp";
import Apple from "../../../../../../public/assets/apple.webp";
import Google from "../../../../../../public/assets/googleplay.webp";
import flix from "../../../../../../public/assets/flix.webp";
import Mubi from "../../../../../../public/assets/Mubi.webp";
import Zee from "../../../../../../public/assets/zee.webp";
import Tfc from "../../../../../../public/assets/Tfc.webp";

const Streaming = () => {
  return (
    <div className="Streaming container">
      <div className="Title-Streaming">
        <p>Streaming Services on Swatch</p>
      </div>

      <div className="Streaming-Container">
        <div className="img-platform">
          <img src={Nitfilex} alt="Nitfilex" />
        </div>

        <div className="img-platform">
          <img src={prime} alt="prime" />
        </div>

        <div className="img-platform">
          <img src={Apple} alt="Apple" />
        </div>

        <div className="img-platform">
          <img src={Google} alt="Google" />
        </div>

        <div className="img-platform">
          <img src={flix} alt="flix" />
        </div>

        <div className="img-platform">
          <img src={Mubi} alt="Mubi" />
        </div>

        <div className="img-platform">
          <img src={Zee} alt="Zee" />
        </div>

        <div className="img-platform">
          <img src={Tfc} alt="Zee" />
        </div>
      </div>
    </div>
  );
};

export default Streaming;
