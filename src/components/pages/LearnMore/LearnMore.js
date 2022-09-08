import Hero from "../../Hero";
import { SignUpHero, homeObjThree } from "../../data/hero-data";
import ScrollToTop from "../../ScrollToTop";

function LearnMore() {
  return (
    <>
      <ScrollToTop />
      <Hero {...SignUpHero} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default LearnMore;
