import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";

const HeroBanner = () => {
  return (
    <section className="homeSlide" style={{ padding: 0, margin: 0 }}>
      {/* Remove Container if you want image to span full width */}
      {SliderData.length > 0 && (
        <SlideCard cover={SliderData[0].cover} />
      )}
    </section>
  );
};

export default HeroBanner;
