import Hero from "../../Hero";
import ProductCards from "../../ProductCards";
import ScrollToTop from "../../ScrollToTop";
import { homeObjOne, homeObjTwo } from "../../data/hero-data";
import { product_card } from "../../data/productcards-data";

function Products() {
  return (
    <>
      <ScrollToTop />
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <ProductCards data={product_card} />
    </>
  );
}

export default Products;
