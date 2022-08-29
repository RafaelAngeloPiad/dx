import Hero from "../../Hero";
import ScrollToTop from "../../ScrollToTop";
import { homeObjOne, homeObjTwo } from "./Data";

function Products() {
  return (
    <>
      <ScrollToTop />
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
    </>
  );
}

export default Products;
