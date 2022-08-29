import Hero from "../../Hero";
import ScrollToTop from "../../Scrolltotop";
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
