import React from "react";
import Hero from "../../Hero";
import HeroImg from "../../HeroImg";
import {
  Headliner,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  tiles,
  header,
  about,
  dataSlider,
} from "./Data";
import Pricing from "../../Pricing";
import Tiles from "../../Tiles";
import Header from "../../Header";
import About from "../../About";
import Slider from "../../Slider";
import ScrollToTop from "../../Scrolltotop";
function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero {...Headliner} />
      <Header data={header} />
      <HeroImg data={header} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Slider data={dataSlider} />
      <Pricing />
      <Tiles data={tiles} />
      <Hero {...homeObjFour} />
      <About data={about} />
    </>
  );
}

export default Home;
