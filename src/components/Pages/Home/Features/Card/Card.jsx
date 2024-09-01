import "./Card.css";
import CardList from "./CardList";

const CardFeatures = () => {
  return (
    <div className="CardFeatures">
      {CardList.map((item) => {
        return (
          <div
            className="Features-Card col-lg-3 col-md-6 col-sm-5 col-9"
            key={item.id}
          >
            <img src={item.img} alt="" />
            <div className="Features-Card-text">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardFeatures;
