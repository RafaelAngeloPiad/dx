import Hero from "../../Hero";

import Header2 from "../../Header2";
import Tiles from "../../Tiles";

import Features from "../../Features";
import Advantages from "../../Advantages";
import { homeObjTwo, homeObjThree, homeObjFour } from "../../data/hero-data";
import { advantage } from "../../data/advantage-data";

import { features } from "../../data/features-data";
import { tiles } from "../../data/tiles-data";
import { splash1 } from "../../data/splash-data";
import SplashSlider from "../../SplashSlider";
import ScrollToTop from "../../ScrollToTop";
import Highlights from "../../Highlights";

function Home() {
  return (
    <>
      <ScrollToTop />
      <SplashSlider data={splash1} />
      <Highlights />
      <Advantages data={advantage} />
      <Hero {...homeObjTwo} />
      <Features data={features} />
      <Tiles data={tiles} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjFour} />
      <Header2 />
    </>
  );
}

export default Home;
