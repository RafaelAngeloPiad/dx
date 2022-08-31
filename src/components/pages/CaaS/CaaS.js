import Hero from "../../Hero";
import HeroImg from "../../HeroImg";
import ProductCards from "../../ProductCards";
import { homeObjTwo, productHero } from "../../data/hero-data";
import { product_card } from "../../data/productcards-data";
import { headerProduct } from "../../data/header-data";

function Products() {
  return (
    <>
      <HeroImg data={headerProduct} />
      <Hero {...productHero} />
      <Hero {...homeObjTwo} />
      <ProductCards data={product_card} />
    </>
  );
}

export default Products;
