import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "wippedwax" || item.category === "winecandle"
  );
  const bestSales = products.filter((item) => item.category === "summervibe");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      {/* <Wrapper /> */}
      {/* <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      /> */}

      <Section title="BEST SELLERS" bgColor="#f6f9fc" productItems={bestSales} />
      <Section
        title="NEW PRODUCTS"
        bgColor="white"
        productItems={newArrivalData}
      />
      
    </Fragment>
  );
};

export default Home;
