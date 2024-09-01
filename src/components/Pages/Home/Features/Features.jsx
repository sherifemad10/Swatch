import CardFeatures from "./Card/Card";
import "./Features.css";
import Streaming from "./Streaming/Streaming";

const Features = () => {
  return (
    <div className="Features" id="Features">
      <Streaming />
      <CardFeatures />
      <div className="line"></div>
    </div>
  );
};

export default Features;
