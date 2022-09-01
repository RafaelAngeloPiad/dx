import Hero from "../../Hero";
import HeroImg from "../../HeroImg";
import Header3 from "../../Header3";
import ProductCards from "../../ProductCards";
import { insights, productHero } from "../../data/hero-data";
import { product_card } from "../../data/productcards-data";
import { headerProduct, headerProduct2 } from "../../data/header-data";

function Products() {
  return (
    <>
      <HeroImg data={headerProduct} />
      <Header3 data={headerProduct2} />
      <Hero {...productHero} />
      <Hero {...insights} />
      <ProductCards data={product_card} />
    </>
  );
}

export default Products;
