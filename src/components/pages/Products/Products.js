import Hero from "../../Hero";
import ProductCards from "../../ProductCards";
import ScrollToTop from "../../ScrollToTop";
import { homeObjOne, homeObjTwo, product_card } from "./Data";

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
