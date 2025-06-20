import "./slidercard.css";

const SlideCard = ({ cover }) => {
  return (
    <div className="slide-image-wrapper">
      <img
        src={cover}
        alt="slide"
        className="slide-full-image"
      />
    </div>
  );
};

export default SlideCard;

