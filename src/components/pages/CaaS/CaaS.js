import Hero from "../../Hero";
import Header3 from "../../Header3";
import ProductCards from "../../ProductCards";
import { insights, productHero } from "../../data/hero-data";
import { product_card } from "../../data/productcards-data";
import { headerProduct2 } from "../../data/header-data";
import SplashSlider from "../../SplashSlider";
import { splashSlider } from "../../data/splash-data";

function Products() {
  return (
    <>
      <SplashSlider data={splashSlider} />
      <Header3 data={headerProduct2} />
      <Hero {...productHero} />
      <Hero {...insights} />
      <ProductCards data={product_card} />
    </>
  );
}

export default Products;
