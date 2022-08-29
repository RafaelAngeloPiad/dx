import Hero from "../../Hero";
import { homeObjOne, homeObjThree } from "./Data";
import Pricing from "../../Pricing";

function Services() {
  return (
    <>
      <Pricing />
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default Services;
