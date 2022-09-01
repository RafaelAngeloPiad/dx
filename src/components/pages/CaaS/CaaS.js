import Hero from "../../Hero";
import HeroImg from "../../HeroImg";
import ProductCards from "../../ProductCards";
import { insights, productHero } from "../../data/hero-data";
import { product_card } from "../../data/productcards-data";
import { headerProduct } from "../../data/header-data";

function Products() {
  return (
    <>
      <HeroImg data={headerProduct} />
      <Hero {...productHero} />
      <Hero {...insights} />
      <ProductCards data={product_card} />
    </>
  );
}

export default Products;
