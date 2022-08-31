import Hero from "../../Hero";
import HeroImg from "../../HeroImg";
import ProductCards from "../../ProductCards";
import ScrollToTop from "../../ScrollToTop";
import { homeObjOne, homeObjTwo, productHero } from "../../data/hero-data";
import { product_card } from "../../data/productcards-data";
import { headerProduct } from "../../data/header-data";

function Products() {
  return (
    <>
      <ScrollToTop />
      <HeroImg data={headerProduct} />
      <Hero {...productHero} />
      <Hero {...homeObjTwo} />
      <ProductCards data={product_card} />
    </>
  );
}

export default Products;
